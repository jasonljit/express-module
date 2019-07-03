const http = require('http');
const app = require('../server/client');
const server = http.createServer(app);
const port = global.PORT;

server.listen(port, () => {
	console.log(`Server is listening on port: ${port}`);
});
