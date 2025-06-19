// import mongoose from "mongoose";
import express from "express";
// import { DB_NAME } from "./constants.js";
import dotenv from "dotenv"
import connectDB from "./db/indexx.js";
let app=express();

dotenv.config({
    path:'./.env'
})
connectDB().then(()=>{
    app.on("error",(error)=>{
        console.log(`error is : ${error}`)
        throw error
    })
    app.listen(process.env.PORT || 8000,()=>{
console.log(`port is running in ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(`error is : ${err}`)
})

// const app = express();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("error is found: ", error);
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`app is lestining on port no : ${process.env.PORT}`);
//         })
//     }
//     catch (error) {
//         console.log(`error is ${error}`);
//         throw error
//     }

// })();