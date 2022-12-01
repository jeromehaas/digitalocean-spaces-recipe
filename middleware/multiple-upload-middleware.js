const multer = require('multer');
const storage = multer.memoryStorage({ destination: (req, file, callback) => callback(null, '')});

const multipleUploadMiddleware = multer({ storage: storage }).array('upload');

module.exports = multipleUploadMiddleware;