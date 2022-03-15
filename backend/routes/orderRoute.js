const express =  require("express");
const { newOrder, getOneOrder, myOrders, getAllOrders, upStatusOrder, deleteOrder } = require("../controllers/orderController");
const router = express.Router();
const { isAuthenticateUser,authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticateUser,newOrder);
router.route("/order/:id").get(isAuthenticateUser,getOneOrder);
router.route("/orders/me").get(isAuthenticateUser,myOrders);

// Admin 
router.route("/admin/orders").get(isAuthenticateUser,authorizeRoles("admin"),getAllOrders);
router.route("/admin/order/:id").put(isAuthenticateUser,authorizeRoles("admin"),upStatusOrder);
router.route("/admin/order/:id").delete(isAuthenticateUser,authorizeRoles("admin"),deleteOrder);





module.exports = router;