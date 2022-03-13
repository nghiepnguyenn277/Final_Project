const mongoose =require("mongoose");

const productSchema =mongoose.Schema({
    name:{
        type: String,
        required:[true,"Enter Product Name"],
        trim: true
    },
    description:{
        type:String,
        required:[true,"Enter descreption"]
    },
    price:{
        type: Number,
        required: [true,"Enter price"],
        maxLength:[10,"Price cannot exceed 10 character"]
    },
    size:{
        type:Number,
        maxLength:[2,"Price cannot exceed 2 character"],
        required: [true,"size"],
        
    },
    ratings:{
        type:Number,
        default:0
    },
    images:[
    {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true,
        }
    }
 ],
    category:{
        type:String,
        required:[true,"Enter Product Category"],
    },
    stock:{
        type:Number,
        required:[true,"Enter Stock"],
        maxLength:[4," 4 characters"],
        default:1,
    },
    numOfReviews:{
        type:Number,
        default:0,
    },
    reviews:[
        {
            user:{
                type:mongoose.Schema.ObjectId,
                ref:"User",
                required:true,
            },
            name:{
                type:String,
                required:true ,              
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true,
            }

    }],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },
    createAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("Product",productSchema);