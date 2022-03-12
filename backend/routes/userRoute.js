const express = require("express");
const 
{
    registerUser, 
    loginUser,
    Logout,
    forgotPassword,
    resetPassword,
    getUserDetails,
} =require("../controllers/userController");
const {isAuthenticateUser, authorizeRoles} = require("../middleware/auth")
const router = express.Router();


// Register, Login, Logout, Reset Password
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(Logout);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

// see infomation
 router.route("/infomation").get(isAuthenticateUser, getUserDetails)


module.exports =  router;
