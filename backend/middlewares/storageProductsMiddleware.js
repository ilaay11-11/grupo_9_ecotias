const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folderProductImage = path.join(__dirname, '../public/images/productImages');

        callback(null, folderProductImage);
    },
    filename: (req, file, callback) => {
        let imageName = 'product-' + Date.now() + path.extname(file.originalname);
        callback(null, imageName);
    }
});

const uploadProductImage = multer({ storage });

module.exports = uploadProductImage;