// Create web server
// Create a web server that listens on port 3000 and returns the comments data in the comments.js file in the response.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./comments.js', (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not Found');
    } else {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server is running');
});