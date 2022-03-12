const res = require("express/lib/response");
const Product =require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors =require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures")
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
exports.getAllProducts=catchAsyncErrors (async(req,res)=>{

    const resultPerpage = 5;
    const productCount = await Product.countDocuments();
    const apifeature = new ApiFeatures(Product.find(),req.query)
    .search()
    .filter()
    .pagination(resultPerpage);
    const products = await apifeature.query;
   
    res.status(200).json({
        success:true,
        products,
       
    });

});

// Get Product Details
exports.getProductDetails = catchAsyncErrors(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
       return  next(new ErrorHander("Product no found",404));
    }
    res.status(200).json({
        success:true,
        product,
        productCount,
    });
        
});

// Update Product -- For Admin
exports.updateProduct =catchAsyncErrors(async (req,res,next)=>{
    let product = Product.findById(req.params.id);

    if(!product){
        return  next(new ErrorHander("Product no found",404));
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
       return  next(new ErrorHander("Product no found",404));
    }

     await product.remove();
     res.status(200).json({
        success:true,
        message:"Delete successfull"
     })
 });