const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folderUserImage = path.join(__dirname, '../public/images/userImages');

        callback(null, folderUserImage);
    },
    filename: (req, file, callback) => {
        let imageName = 'user-' + Date.now() + path.extname(file.originalname);
        callback(null, imageName);
    }
});

const uploadUserImage = multer({ storage });

module.exports = uploadUserImage;