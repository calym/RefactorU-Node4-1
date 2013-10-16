// readFileSync!
// var fs = require('fs');
// var http = require('http');
// http.createServer(function (req, res) {
//   var text = fs.readFileSync(__dirname + '/data.txt');
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end(text);

// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');


//readFile = asynchronous!
var fs = require('fs');
var http = require('http');
http.createServer(function (req, res) {
fs.readFile(__dirname + '/data.txt',function(err,data) {
  	if (err) {
  		throw err;
  	}
  	console.log(data);
  	res.writeHead(200, {'Content-Type': 'text/html'});
  	res.end(data);
  });
  

}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
