const dotenv = require('dotenv');
const express = require('express');
const app = express();
const router = require('./router');
const handlebarConfigs = require('./configs/handlebar-configs');

// BRING IN ENV-FILES
dotenv.config();

// SETUP VIEW ENGINE
app.engine('handlebars', handlebarConfigs);
app.set('view engine', 'handlebars');
app.set('views', './views');

// DEFINE PUBLIC PATH
app.use(express.static('public'));

// SETUP JSON-PARSER
app.use(express.json());

// ROUTE FILES
app.use(router);

// START APP
const port = process.env.APP_PORT || 5005;
app.listen(port, () => {
	console.log(`Server is up and running on port ${ port }`);
});

