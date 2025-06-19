import mongoose from "mongoose";
import express from "express";

import { DB_NAME } from "../constants.js";
 const app = express();
export default async function connectDB()
    {
        try {
            await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("error is found: ", error);
                throw error
            })
            app.listen(process.env.PORT, () => {
                console.log(`app is lestining on port no : ${process.env.PORT}`);
            })
        }
        catch (error) {
            console.log(`error is ${error}`);
            throw error
        }
    
    }
