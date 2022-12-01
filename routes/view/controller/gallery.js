const gallery = (req, res, next) => {
	res.render('gallery', { layout: 'page' });
};

module.exports = gallery;