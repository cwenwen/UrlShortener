// from npm
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// from controller
const indexController = require('./controller/index')
const redirectController = require('./controller/redirect')

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set views
app.set('views', './views');
app.set('view engine', 'ejs');

// static files
app.use(express.static('public'));

// handle route
app.get('/', indexController.index);
app.post('/', indexController.shorten);
app.get('/:value', redirectController);

// port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));