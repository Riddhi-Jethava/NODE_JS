const multer = require("multer");
const path = require("path");

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let subFolder = "uploads/"
        if (req.route.path == '/addCategory') {
            subFolder = "uploads/category"
        }
        cb(null, `${subFolder}`)
    },

    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

const uploadImage = multer({ storage: Storage }).fields([
    { name: "categoryImage", maxCount: 1 },
    { name: "subCategory", maxCount: 1 }
])

module.exports = uploadImage;