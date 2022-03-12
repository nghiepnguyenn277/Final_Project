const app = require("./app");

const dotenv =require("dotenv");
const connectDatabase =require("./config/database")

// Handling Uncaugh Exception
process.on("uncaughtException",(err)=>
{
    console.log(`Error: ${err.message}`);
    console.log(`Shut down server`);
    process.exit(1);
})

//Config file
dotenv.config({path:"backend/config/config.env"});

//database connect
connectDatabase()

const server = app.listen(process.env.PORT,()=>{

    console.log('sever is running');
    console.log(process.env.PORT);
})

//Unhanlder Promise

process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log(`Shut down server`);

    server.close(()=>{
        process.exit(1);
    });
});