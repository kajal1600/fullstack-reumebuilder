

// routes/userRoutes.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const { getPersonalInfo,getUser, uploadProfilePic, register,createPersonalInfo} = require("../controllers/userController"); // Use register for user creation

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



// ✅ Ensure GET route works correctly (Fetching personal info using session)





router.post("/add-personal", createPersonalInfo);
router.get("/personal-info", getPersonalInfo);






module.exports = router;










