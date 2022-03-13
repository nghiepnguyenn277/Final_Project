const express = require("express");
const 
{
    registerUser, 
    loginUser,
    Logout,
    forgotPassword,
    resetPassword,
    getUserDetails,
    updatePassword,
    updateProfile,
    getAllUser,
    getOneUser,
    updateUserRole,
    deleteUser,
} =require("../controllers/userController");
const {isAuthenticateUser, authorizeRoles} = require("../middleware/auth")
const router = express.Router();


// Register, Login, Logout, Reset Password
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(Logout);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

// see Profile
 router.route("/profile").get(isAuthenticateUser, getUserDetails)

// change Profile
router.route("/profile/update").put(isAuthenticateUser,updateProfile);

// change password
router.route("/password/changepassword").put(isAuthenticateUser,updatePassword);

// admin management User
router.route("/admin/users").get(isAuthenticateUser,authorizeRoles("admin"),getAllUser);
router.route("/admin/user/:id").get(isAuthenticateUser,authorizeRoles("admin"),getOneUser);
router.route("/admin/user/:id").put(isAuthenticateUser,authorizeRoles("admin"),updateUserRole);
router.route("/admin/user/:id").delete(isAuthenticateUser,authorizeRoles("admin"),deleteUser);
module.exports =  router;
