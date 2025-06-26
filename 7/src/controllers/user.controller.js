import { asyncHandler } from "../utils/asyncHandlers.js"
const registerUser = asyncHandler(async (req, res) => {
   res.status(500).json({
      message:"chai"
   })
   
   
   // const {fullName,email}=req.body
   // console.log("email :",email);
})

export { registerUser }