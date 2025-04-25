

// routes/userRoutes.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const { getPersonalInfo,getUser, uploadProfilePic, register,createPersonalInfo,createEducation,getEducation, createExperience, getExperience,addContactInformation, getContactInformation, addAward, getAwards,getUserData} = require("../controllers/userController"); // Use register for user creation

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: "/uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Define routes
router.get("/user", getUser);
router.post("/upload", upload.single("profilePic"), uploadProfilePic);
router.post("/register", register);  // Use register function for creating a new user

router.post("/add-personal", createPersonalInfo);
router.get("/personal-info", getPersonalInfo);

router.post("/add-education", createEducation);
router.get("/education-info", getEducation);

router.post("/add-experience", createExperience);
router.get("/experience-info", getExperience);
// Routes for Contact Information
router.post("/contact-information", addContactInformation);
router.get('/contact-information', getContactInformation );

// Routes for Awards/Certifications
router.post("/add-award", addAward);
router.get("/awards-info", getAwards);


// ✅ Get complete user data (Personal Info, Contact Info, Education, Experience, Awards)
router.get("/:userId", getUserData);


module.exports = router;










