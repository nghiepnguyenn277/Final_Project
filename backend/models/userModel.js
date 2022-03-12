const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require ("crypto");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require:[true,"Enter your name"],
        maxlength:[25,"Max name 25 chracter"],
        minlength:[3,"Min name 3 character"],
    },
    email:{
        type: String,
        required:[true,"Enter your email"],
        validate:[validator.isEmail,"Validate Email"],
        unique:true,
    },
    password:{
        type: String,
        required:[true,"Enter password"],
        maxlength:[20,"Max password 20 charactes"],
        minlength:[8,"Min password 8 character "],
        select:false,
    },
    avatar:{
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        }
    },
    role:{
        type:String,
        default:"user",
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
});

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password,10); // Bam pass
});
 
// JWT Token  (tao token)
userSchema.methods.getJWTToken =function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE,
    });
};

//Compare Password
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
};

// Gennera Password Reset Token
userSchema.methods.getResetPasswordToken = function()
{
    //Grenera token
    const resetToken = crypto.randomBytes(10).toString("hex");
    // Hashing and adding ressetPasswordToken
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
     return resetToken;
};


module.exports = mongoose.model("User",userSchema);