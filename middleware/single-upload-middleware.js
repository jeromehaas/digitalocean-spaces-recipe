const multer = require('multer');
const storage = multer.memoryStorage({ destination: (req, file, callback) => callback(null, '')});

const singleUploadMiddleware = multer({ storage: storage }).single('upload');

module.exports = singleUploadMiddleware;