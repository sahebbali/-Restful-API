const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");
const { registerUserValidator } = require("../validators/userValidator");
const { loginUserValidator } = require("../validators/userValidator");

// Register a new user
router.post("/register", registerUserValidator, registerUser);
router.post("/login", loginUserValidator, loginUser);

module.exports = router;
