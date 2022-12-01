const error = (req, res, next) => {
	res.render('error', { layout: 'page' });
};

module.exports = error;