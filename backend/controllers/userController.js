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


// controllers/userController.js


exports.createPersonalInfo = async (req, res) => {
  try {
    const { personalInfo } = req.body;
    const {userId}=req.query

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




// exports.getPersonalInfo = async (req, res) => {
//   try {
//     const { userId } = req.query;

//     if (!userId) {
//       return res.status(400).json({ error: "User ID is required" });
//     }

//     const user = await User.findById(userId);
//     if (!user || !user.personalInfo) {
//       return res.status(404).json({ error: "Personal info not found" });
//     }

//     res.json(user.personalInfo);
//   } catch (error) {
//     console.error("Error fetching personal info:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// };





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





exports.createEducation = async (req, res) => {
  try {
    const { education } = req.body;
    const {userId} =req.query

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({error: "User not found" });
    }

    user.education.push(req.body.education);
    await user.save();

    res.status(201).json({ message: "Education details added successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};


exports.getEducation = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const user = await User.findById(userId).select("education");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ education: user.education }); // Ensure we return an array
  } catch (error) {
    console.error("Error fetching education data:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.createExperience = async (req, res) => {
  try {
    const {experience } = req.body;
    const {userId}=req.query

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.experience.push(experience);
    await user.save();

    res.status(201).json({ message: "Experience details added successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getExperience = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const user = await User.findById(userId).select("experience");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ experience: user.experience }); 
  } catch (error) {
    console.error("Error fetching experience data:", error);
    res.status(500).json({ error: "Server error" });
  }
};




exports.addContactInformation = async (req, res) => {
  try {
    const { contactInformation } = req.body;
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.contactInformation = contactInformation;
    await user.save();

    res.status(201).json({ message: "Contact information added successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};



exports.getContactInformation = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const user = await User.findById(userId).select("contactInformation");
    if (!user || !user.contactInformation) {
      return res.status(404).json({ error: "Contact information not found" });
    }

    res.json(user.contactInformation);
  } catch (error) {
    console.error("Error fetching contact information:", error);
    res.status(500).json({ error: "Server error" });
  }
};


exports.addAward = async (req, res) => {
  try {
    const {award } = req.body; // Fix: Use req.body instead of req.query
    const {userId}=req.query

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Fix: Ensure contactInformation is properly structured and pushed
    user.awards.push(award);
    await user.save();

    res.status(201).json({ message: "Contact information added successfully", user });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};


exports.getAwards = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const user = await User.findById(userId).select("awards");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ awards: user.awards }); 
  } catch (error) {
    console.error("Error fetching awards:", error);
    res.status(500).json({ error: "Server error" });
  }
};













exports.getUserData = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
