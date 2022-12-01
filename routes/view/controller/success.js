const success = (req, res, next) => {
	res.render('success', { layout: 'page' });
};

module.exports = success;