// create web server 
// create a web server that listens for HTTP requests and serves a static file on the root path.

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url === '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('404 not found');
    res.end();
  }
}).listen(8080);

console.log('Server is running on http://localhost:8080/');