const express = require('express');
const { Router } = express;
const router = Router();

const index = require('./controller/index');
router.get('/', index);

const success = require('./controller/success');
router.get('/success', success);

const error = require('./controller/error');
router.get('/error', error);

const gallery = require('./controller/gallery');
router.get('/gallery', gallery);

const upload = require('./controller/upload');
router.get('/upload', upload);

module.exports = router;
