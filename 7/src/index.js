// import mongoose from "mongoose";
// index.js

import dotenv from "dotenv";
import connectDB from "./db/indexx.js";
import { app } from "./app.js";  // ✅ Using the configured app

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`✅ Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err);
  });


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