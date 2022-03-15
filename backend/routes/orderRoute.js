const express =  require("express");
const { newOrder, getOneOrder, myOrders } = require("../controllers/orderController");
const router = express.Router();
const { isAuthenticateUser,authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticateUser,newOrder);
router.route("/order/:id").get(isAuthenticateUser,getOneOrder);
router.route("/orders/me").get(isAuthenticateUser,myOrders);



module.exports = router;