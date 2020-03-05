const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./routes/client'));
app.use('/api', require('./routes/client-api'));

module.exports = app;
