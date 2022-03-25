const res = require("express/lib/response");
const Product =require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors =require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const { query } = require("express");
//Create Product -- For Admin 
exports.createProduct= catchAsyncErrors(async(req,res,next) => {
    
    req.body.user = req.user.id; 
    
    const product =await Product.create(req.body)

    res.status(201).json({
        success:true,
        product,
    });
});

// Get All Product
exports.getAllProducts=catchAsyncErrors (async(req,res,next)=>{


    
    const resultPerpage = 8;
    const productCount = await Product.countDocuments();
    const apifeature = new ApiFeatures(Product.find(),req.query)
    .search()
    .filter()
    .pagination(resultPerpage);
    const products = await apifeature.query;
   
    res.status(200).json({
        success:true,
        products,
        productCount,
       
    });

});

// Get Product Details
exports.getProductDetails = catchAsyncErrors(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
       return  next(new ErrorHander("Product not found",404));
    }
    res.status(200).json({
        success:true,
        product,
    });
        
});

// Update Product -- For Admin
exports.updateProduct =catchAsyncErrors(async (req,res,next)=>{
    let product = Product.findById(req.params.id);

    if(!product){
        return  next(new ErrorHander("Product not found",404));
     }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });
    res.status(200).json({
        success:true,
        product
    })
});

// Delete Product -- For Admin
 exports.deleteProduct =catchAsyncErrors(async(req,res,next)=>{
     
    const product = await Product.findById(req.params.id);
     if(!product){
       return  next(new ErrorHander("Product not found",404));
    }

     await product.remove();
     res.status(200).json({
        success:true,
        message:"Delete successfull",
     })
 });

 // Create New Review or update review

 exports.createReview =catchAsyncErrors(async(req,res,next)=>{
    
    const {rating,comment,productId} = req.body

    const review ={
        user: req.user._id,
        name : req.user.name,
        rating: Number(rating),
        comment,
    };

    const product = await Product.findById(productId);
    const isReviewed = product.reviews.find(
        (rev)=>rev.user.toString() === req.user._id.toString());

    if(isReviewed)
    {
        product.reviews.forEach((rev)=>{

            if(rev.user.toString() === req.user._id.toString())
                (rev.rating = rating),
                (rev.comment = comment);

        });
    }
    else
    {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    }

     let avg = 0;
     product.ratings = product.reviews.forEach((rev)=>{
        avg+= rev.rating;
     }) 
        product.ratings = avg / product.reviews.length;

     await product.save({validateBeforeSave: false});
        res.status(200).json({
            success:true,
        });
 });

 // Get All Reviews
 exports.getAllReviews =catchAsyncErrors(async(req,res,next)=>{
        const product = await Product.findById(req.query.id);
        if(!product){
            return next(new ErrorHander("Product not found",404))
        };
        res.status(200).json({
            success:true,
            reviews: product.reviews,
        })
 });