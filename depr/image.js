// IMPORTS
var express = require('express');
var router = express.Router();
var multer  = require('multer');
const bucket = require('../configs/aws-configs');

// MULTER CONFIGS
const storage = multer.memoryStorage({ destination: (req, file, callback) => callback(null, '')});
const multipleUpload = multer({ storage: storage }).array('upload');
const singleUpload = multer({ storage: storage }).single('upload');

// ROUTE MULTIPLE-UPLOAD
router.post('/multiple-upload', multipleUpload, (req, res) => {

	// GET FILE FROM REQUEST
	const file = req.files;
	
	// LOOP OVER ALL ITEMS IN REQUEST
		file.map((item) => {

			// DEFINE AWS PARAMS
  		const params = {
        Bucket: 'hello-world',
        Key: item.originalname,
        Body: item.buffer,
        ACL: 'public-read'
 	 		};

			// UPLOAD ALL FILES TO BUCKET
			bucket.upload(params, (err, data) => {
        if (err) return res.json({ "error": true, "Message": err});
      });

     });

		 // SEND RESPONSE
		res.redirect('/success');

});

// ROUTE SINGLE-UPLOAD
router.post('/single-upload', singleUpload, (req, res) => {

	// GET FILE FROM REQUEST
	const file = req.file;
	
			// DEFINE AWS PARAMS
  		const params = {
        Bucket: 'hello-world',
        Key: file.originalname,
        Body: file.buffer,
        ACL: 'public-read'
 	 		};

			// UPLOAD ALL FILES TO BUCKET
			bucket.upload(params, (err, data) => {
        if (err) return res.json({ "error": true, "Message": err});
      });

		 // SEND RESPONSE
		res.redirect('/success');

});

module.exports = router;