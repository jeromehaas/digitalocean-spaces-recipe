const bucket = require('../../../configs/aws-configs');

const getAll = (req, res, next) => {

    const params = { 
        Bucket: 'hello-world',
        MaxKeys: 500,
    };

    bucket.listObjects(params, (err, data) => {
        if (err) return res.json({ error: true, message: err });
        const { Contents } = data;
        res.send(Contents);
    });





};

module.exports = getAll;