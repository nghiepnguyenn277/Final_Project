const Order =require("../models/orderModel");
const Product =require("../models/productModel");
const ErrorHander =require("../utils/errorhander");
const catchAsyncErrors =require("../middleware/catchAsyncErrors");


//create Order
exports.newOrder = catchAsyncErrors(async(req,res,next)=>{
    const{
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        shipPrice,
        totalPrice,
    } = req.body;
    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        shipPrice,
        totalPrice,
        paidAt : Date.now(),
        user:req.user._id,
    });
    res.status(201).json({
        succcess: true,
        order,
    });
});

// Get One Order
exports.getOneOrder = catchAsyncErrors(async(req,res,next)=>{

    const order =await Order.findById(req.params.id).populate("user","name email");

    if(!order){
        return next (new ErrorHander("Oder not found id",404));
    };

    res.status(201).json({
        succcess: true,
        order,
    });
});

// Get my Order
exports.myOrders = catchAsyncErrors(async(req,res,next)=>{

    const orders =await Order.find({user: req.user._id});

    res.status(201).json({
        succcess: true,
        orders,
    });

});

// get All Order 

exports.getAllOrder =catchAsyncErrors(async(req,res,next)=>{

    const orders =await Order.find();
    let totalAmount = 0;
    orders.forEach((orders)=>{
        totalAmount += orders.totalPrice;
    });

    res.status(201).json({
        succcess: true,
        totalAmount,    
        orders,
    });

});