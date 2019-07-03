const {
	port,
} = require('../config');

global.PORT = port;

require('./client-www');
