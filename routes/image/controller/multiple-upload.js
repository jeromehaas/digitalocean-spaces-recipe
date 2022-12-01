const bucket = require('../../../configs/aws-configs');

const multipleUpload = (req, res, next) => {

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
    // res.json({ "error": false, "Message": "File Uploaded suceced" });
		res.redirect('/success');
	

};

module.exports = multipleUpload;