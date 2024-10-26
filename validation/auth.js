const { check } = require("express-validator");

exports.userRegistrationValidator=[
    check("name")
      .trim()
      .notEmpty()
      .withMessage("Name is Missing")
      .isLength({ min: 5 })
      .withMessage("name must at least 5 character")
      .isLength({ max: 15 })
      .withMessage("Maximum Character 15 can give"),
  
    check("email")
      .trim()
      .notEmpty()
      .withMessage("Email is Missing")
      .isEmail()
      .withMessage("Not a Valid Email"),
  
    check("password")
      .trim()
      .notEmpty()
      .withMessage("Password is Missing")
      .isLength({ min: 8 })
      .withMessage("Password must be 8 character"),
  
    check("dob")
      .trim()
      .notEmpty()
      .withMessage("dob is Missing")
      .isISO8601()
      .toDate()
      .withMessage("This is not Valid Date")
]

exports.userLoginValidator=[
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is Missing")
    .isEmail()
    .withMessage("Not a Valid Email"),

  check("password")
    .trim()
    .notEmpty()
    .withMessage("Password is Missing")
    .isLength({ min: 8 })
    .withMessage("Password must be 8 character")
]