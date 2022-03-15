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
        return next (new ErrorHander("Order not found id",404));
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

// get All Order --Admin

exports.getAllOrders =catchAsyncErrors(async(req,res,next)=>{

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

// Update status order --Admin

exports.upStatusOrder =catchAsyncErrors(async(req,res,next)=>{

    const order = await Order.findById(req.params.id);

    if(!order){
        return next (new ErrorHander("Order not found id",404));
    };
    
   if(order.orderStatus ==="Delivered"){
       return next (new ErrorHander("You have already delivered this order ",400));
   };

   order.orderItems.forEach(async order =>{
    await updateStock(order.product, order.quantity);
   });

   order.orderStatus =req.body.status;

   if(req.body.status == "Delivered"){
        order.delivereAt = Date.now();
   };

   await order.save({validateBeforeSave: false})
    res.status(201).json({
        succcess: true,
       
    });
});

// update Stock 
 async function updateStock(id,quantity){
     const product =  await Product.findById(id);

     product.stock -= quantity;

     await product.save({ validateBeforeSave: false});
 };

 // Delete Order --Admin
exports.deleteOrder =catchAsyncErrors(async(req,res,next)=>{

    const order =await Order.findById(req.params.id);
  
    
    if(!order){
        return next (new ErrorHander("Order not found id",404));
    };

    await order.remove();

    res.status(201).json({
        succcess: true,
        message :" delete order succecsfull",
       
    });
});