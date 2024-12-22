const { check } = require("express-validator");

exports.registerUserValidator = [
  check("username").not().isEmpty().withMessage("Username is required"),
  check("email").isEmail().withMessage("Valid email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

exports.loginUserValidator = [
  check("email").isEmail().withMessage("Valid email is required"),
  check("password").not().isEmpty().withMessage("Password is required"),
];
