


// routes/authRoutes.js
const express = require("express");
const User = require("../models/User");  // Correct, imported once

const { register, login, logout,createPersonalInfo} = require("../controllers/userController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
// router.post("/add-personal", createPersonalInfo);
router.post("/add-personal", createPersonalInfo);


module.exports = router;





