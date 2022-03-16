const ErrorHandler =require("../utils/errorhander");


module.exports=(err,req,res,next)=>{
    err.statusCode =err.statusCode || 500;
    err.message = err.message || "Interal Server Error";

    //Error Wrong ID
    if(err.name === "CastError"){
        const message =`Resoure not found. Invalid: ${err.path}`;
       
        err = new ErrorHandler(message,400)
    }

    // mongoose uniqe Email
     if(err.code ===11000){
         const message =`Email already in use`;
         err = new ErrorHandler(message,400);
     }

     
    //Error Wrong JWT
    if(err.name === "JsonWebTokenError"){
        const message =`Json Web Token is invalid`;
        err = new ErrorHandler(message,400)
    }
    //Error  JWT EXPIRE
    if(err.name === "TokenExpiredError"){
        const message =`Token Expired `;
        err = new ErrorHandler(message,400)
    }

    res.status(err.statusCode).json({
        success:false,
        message:err.message,
    });
};