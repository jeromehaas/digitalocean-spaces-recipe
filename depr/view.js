const express = require('express');
const { Router } = express;
const router = Router();
const path = require('path');

router.get('/', (req, res, next) => {
	res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

router.get('/error', (req, res, next) => {
	res.sendFile(path.resolve(__dirname, '../views/error.html'));
});

router.get('/success', (req, res, next) => {
	res.sendFile(path.resolve(__dirname, '../views/success.html'));
});



module.exports = router;