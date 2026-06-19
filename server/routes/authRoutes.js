const express = require("express");
const router = express.Router();
const { signUpUser, loginUser } = require("../controllers/authController")


router.post("/login", loginUser);


module.exports = router;