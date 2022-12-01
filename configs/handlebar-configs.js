const { engine } = require('express-handlebars');

const handlebarConfigs = engine({
	defaultLayout: 'page', 
	layoutsDir: 'views/layouts' 
});

module.exports = handlebarConfigs;