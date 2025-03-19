


// model/User.js

const mongoose = require("mongoose");

// Nested schema for Personal Information (for reference)
const personalInfoSchema = new mongoose.Schema({
  Firstname: { type: String, required: true },
  LastName: { type: String, required: true },
  Profession: { type: String, required: true },
  Address: { type: String, required: true },
  City: { type: String, required: true },
  State: { type: String, required: true },
  ZipCode: { type: Number, required: true },
});

// Nested schema for Education (for reference)
const educationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  yearOfPassing: { type: Number, required: true },
});

// Updated Nested schema for Experience – now including Institute, Course, Country, State, Start, and Finish
const experienceSchema = new mongoose.Schema({
  Institute: { type: String, required: true },
  Course: { type: String, required: true },
  Country: { type: String, required: true },
  State: { type: String, required: true },
  Start: { type: Date, required: true },  // Using Date type; change to String if preferred
  Finish: { type: Date, required: true }, // Using Date type; change to String if preferred
});

// Nested schema for Skills (for reference)
const skillsSchema = new mongoose.Schema({
  skillName: { type: String, required: true },
  proficiency: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], required: true },
});

// Nested schema for Projects (for reference)
const projectsSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  description: { type: String, required: true },
  technologiesUsed: { type: [String], required: true },
});

// Main User schema including all nested schemas
const userSchema = new mongoose.Schema({
  // Signup details
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePic: { type: String, default: "" },

  // Nested Data
  personalInfo: personalInfoSchema,
  education: [educationSchema],
  experience: [experienceSchema],
  skills: [skillsSchema],
  projects: [projectsSchema],
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;




