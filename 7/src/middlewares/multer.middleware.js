import multer from "multer";
let storage = multer.diskStorage({
    destination: function (file, req, cb) {
        cb(null, "./public/temp")
    },
    filename: function (file, req, cb) {
        cb(null, file.originalname)
    }
})
export const upload=multer({storage})