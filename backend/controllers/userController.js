// controllers/userController.js
const User = require("../models/User");


// Register (Create user)


exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// Login
// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email, password });
//     if (!user) return res.status(401).json({ message: "Invalid credentials" });

//     req.session.user = user; // Save user in session
//     res.json({ message: "Login successful", user });
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// };






exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    req.session.user = { _id: user._id, email: user.email }; // ✅ Store in session
    req.session.save(); // ✅ Ensure session is saved

    res.json({ message: "Login successful", user: req.session.user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Server error" });
  }
};


// Logout
exports.logout = (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ error: "Logout failed" });
    res.json({ message: "Logout successful" });
  });
};

// Get current logged-in user details
exports.getUser = async (req, res) => {
  if (!req.session.user) return res.status(401).json({ message: "Unauthorized" });

  try {
    const user = await User.findById(req.session.user._id);
    res.json(user);
  } catch (err) {
    console.error("Get user error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// Upload profile picture
exports.uploadProfilePic = async (req, res) => {
  if (!req.session.user) return res.status(401).json({ message: "Unauthorized" });

  try {
    await User.findByIdAndUpdate(req.session.user._id, { profilePic: req.file.filename });
    res.json({ profilePic: req.file.filename });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: "Error uploading file" });
  }
};





exports.createPersonalInfo = async (req, res) => {
  try {
    const { userId, personalInfo } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.personalInfo = personalInfo;
    await user.save();

    res.status(201).json({ message: "Personal information added successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};




exports.getPersonalInfo = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const user = await User.findById(userId).select("personalInfo");
    if (!user || !user.personalInfo) {
      return res.status(404).json({ error: "Personal info not found" });
    }

    res.json(user.personalInfo);
  } catch (error) {
    console.error("Error fetching personal info:", error);
    res.status(500).json({ error: "Server error" });
  }
};
