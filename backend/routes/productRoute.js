const express =require("express");
const { getAllProducts,createProduct,updateProduct,deleteProduct,getProductDetails,createReview } = require("../controllers/productController");
const { isAuthenticateUser,authorizeRoles } = require("../middleware/auth");


const router=express.Router();

// user
router.route("/products").get( getAllProducts);
router.route("/product/:id").get(getProductDetails)

// admin management Product

router.route("/admin/product/new").post(isAuthenticateUser,authorizeRoles("admin"),createProduct);
router
.route("/admin/product/:id")
.put(isAuthenticateUser,authorizeRoles("admin"),updateProduct)
.delete(isAuthenticateUser,authorizeRoles("admin"),deleteProduct)


// review
router.route("/review").put(isAuthenticateUser,createReview);

module.exports =router  
