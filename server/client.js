const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', require('./routes/client'));
app.use('/second-page', require('./routes/client/second-page'));

app.use('/api/form', require('./routes/client/api/form'));

module.exports = app;
