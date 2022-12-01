const express = require('express');
const { Router } = express;
const router = Router();

const singleUploadMiddleware = require('../../middleware/single-upload-middleware');
const multipleUploadMiddleware = require('../../middleware/multiple-upload-middleware');

const singleUpload = require('./controller/single-upload');
router.post('/single-upload', singleUploadMiddleware, singleUpload);

const multipleUpload = require('./controller/multiple-upload');
router.post('/multiple-upload', multipleUploadMiddleware, multipleUpload);

const getAll = require('./controller/get-all');
router.get('/get-all', getAll);

module.exports = router;