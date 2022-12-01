const bucket = require('../../../configs/aws-configs');

const singleUpload = (req, res, next) => {

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

};

module.exports = singleUpload;