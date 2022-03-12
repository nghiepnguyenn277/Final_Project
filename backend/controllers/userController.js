const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors =require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken =require("../utils/jwtToken");
const sendEmail =require("../utils/sendEmail");
const crypto = require ("crypto");


// Register 

exports.registerUser = catchAsyncErrors(async(req,res,next)=>
{
    const {name,email,password} = req.body;
    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id :"example id",
            url:"UrlProfile",
        },
    });
    sendToken(user,201,res);
});

// Login User

exports.loginUser = catchAsyncErrors(async(req,res,next)=>{
    const {email,password} = req.body;

    // check User have email & passs empty
    if(!email ||!password){
        return next(new ErrorHander("Enter Email and Password !",400))
    };
    const user = await User.findOne({email}).select("+password");
    
    if(!user){
        return next(new ErrorHander("Invalid Email or Password",401));
    };

    const isPasswordMatched = await user.comparePassword(password);
    
    if(!isPasswordMatched){
        return next(new ErrorHander("Invalid Email or Password",401));
    };
    
   sendToken(user,200,res);
});

// Logout User 
    exports.Logout =catchAsyncErrors(async(req,res,next)=>{

        res.cookie("token",null,{
            expires: new Date(Date.now()),
        });

        res.status(200).json({
            sussecc:true,
            message:"Logger Out",
        });
    });
// Forgot Password
exports.forgotPassword = catchAsyncErrors(async(req,res,next)=>
{
    const user = await User.findOne({email:req.body.email});
    if(!user)
    {
        return next(new ErrorHander("User not found",404));
    };
    
    //Get ressetPassWord
     const resetToken =  user.getResetPasswordToken();

     await user.save({validateBeforeSave:false});

     const resetPasswordUrl =`${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

     const message =`Password reset token is: -\n\n ${resetPasswordUrl} \n

     If you have not resquested this email then , please ignore it`;

     try{

        await sendEmail({
            email:user.email,   
            subject:`Ecommer password recovery`,
            message,

        });
        res.status(200).json({
            sussecc:true,
            message:`Email sent to ${user.email} succsessfull`
        });

     } catch(error){
         user.resetPasswordToken = undefined;
         user.resetPasswordExpire = undefined;

         await user.save({validateBeforeSave: false});

         return next(new ErrorHander(error.message,500))
     }
});

//reset password
exports.resetPassword =catchAsyncErrors(async(req,res,next)=>{
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex"); // create token hash

    const user = await User.findOne
    ({
        resetPasswordToken,
        resetPasswordExpire:{$gt:Date.now()},
    });
    if(!user)
    {
        return next(new ErrorHander("Reset password token false",400));
    }
    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHander(" password does not  password",400));
    }

    user.password =req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    sendToken(user,200,res);


});

// User Detail
exports .getUserDetails = catchAsyncErrors(async(req,res,next)=>
{
    const user = await User.findById(req.user.id);
     res.status(200).json({
         sussecc: true,
         user,
     });
});

// Change User PassWord