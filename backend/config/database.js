const mongoose =require("mongoose");



const connectDatabase =()=>{

mongoose.connect(process.env.DB_URI,{
    
   // useNewUrlParse:true,
    //useNewUnifiedTopology:true,
   // useCreateIndex:true
}).then(
(data)=>{
        console.log('Mongodb is connecting');
    })
};
module.exports =connectDatabase