const express = require("express");
const { body, validationResult } = require("express-validator");
const { runValidation } = require("../validation");
const { userRegistrationValidator, userLoginValidator } = require("../validation/auth");
const { registerUser, loginUser } = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post(
  "/register",userRegistrationValidator,
  runValidation,
  registerUser
);

userRouter.post(
  "/login",
  userLoginValidator,
  runValidation,
  loginUser
  
);

module.exports = userRouter;
