const index = (req, res, next) => {
	res.render('gallery', { layout: 'page', name: 'Jerome Haas'} );
};

module.exports = index;