

// model/User.js

const mongoose = require("mongoose");

// Nested schema for Personal Information
const personalInfoSchema = new mongoose.Schema({
  Firstname: { type: String, required: true },
  LastName: { type: String, required: true },
  Profession: { type: String, required: true },
  Address: { type: String, required: true },
  City: { type: String, required: true },
  State: { type: String, required: true },
  ZipCode: { type: Number, required: true },
});




// Nested schema for Awards/Certifications
const awardSchema = new mongoose.Schema({
  Organization: { type: String, required: true },
  AwardTitle: { type: String, required: true },
  Date: { type: String, required: true },
  Description: { type: String, required: true },
});
// // Corrected Nested schema for Education
const educationSchema = new mongoose.Schema({
  Institute: { type: String, required: true },
  Course: { type: String, required: true },
  Country: { type: String, required: true },
  State: { type: String, required: true },
  Start: { type: String, required: true },
  Finish: { type: String, required: true },
});


const experienceSchema = new mongoose.Schema({
  EmployerName: { type: String, required: true },
  Company: { type: String, required: true },
  Address: { type: String, required: true },
  Role: { type: String, required: true },
  Start: { type: Date, required: true },
  Finish: { type: Date, required: false },
});



// // Schema for Contact Information
const contactInformationSchema = new mongoose.Schema({
  Email: { type: String, required: true },
  PhoneNumber: { type: String, required: true },
  Linkedin: { type: String, required: true },
  Twitter: { type: String, required: true },
  Instagram: { type: String, required: true },
  Portfolio: { type: String, required: true },
  Github: { type: String, required: true },
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
  experience: [experienceSchema], // Updated Experience Schema
  contactInformation: contactInformationSchema,
  awards: [awardSchema],

}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;








