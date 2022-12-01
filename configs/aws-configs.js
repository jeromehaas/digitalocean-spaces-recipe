const dotenv = require('dotenv')
const aws = require('aws-sdk');

// BRING IN ENV-FILES
dotenv.config();

// DEFINE PATH OF BUCKET
const spacesEndpoint = new aws.Endpoint(process.env.BUCKET_URL);

// SET CONFIGS OF BUCKET
const bucket = new aws.S3({
	endpoint: spacesEndpoint,	
	accessKeyId: process.env.BUCKET_ACCESS_KEY_ID,
	secretAccessKey: process.env.BUCKET_SECRET_ACCESS_KEY,
	Bucket: process.env.BUCKET_NAME
});

module.exports = bucket;