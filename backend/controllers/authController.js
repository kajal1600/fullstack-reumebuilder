
// controller/authControllers.js
const User = require("../models/User");


exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    req.session.user = user;
    res.json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.logout = (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ error: "Logout failed" });
    res.json({ message: "Logout successful" });
  });
};














