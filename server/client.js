const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use('/', require('./routes/client'));

module.exports = app;
