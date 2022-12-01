const axios = require('axios');

const gallery = async (req, res, next) => {

	const { data } = await axios({
		mehtod: 'get', 
		url: 'http://localhost:5000/image/get-all'
	});

	res.render('gallery', { layout: 'page', data: { items: data } });
};

module.exports = gallery;