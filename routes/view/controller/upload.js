const upload = (req, res, next) => {
	res.render('upload', { layout: 'page' });
};

module.exports = upload;