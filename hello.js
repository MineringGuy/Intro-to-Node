// Introduction
/*
var http = require('http');
var url = require('url');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //res.write(req.url);
  var q = url.parse(req.url, true).query;
  var dates = q.year + " " + q.month;
  res.write(dates);
  // res.end('<h1>Hello World! My name is Doc B</h1>');
  res.end();
}).listen(8080);
*/

// File System
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  //console.log(q.pathname);
  var filename = "." + q.pathname;

  if (filename =='./') {
    filename = './index';
  }

  filename = filename + ".html";
  console.log(filename);

  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    // console.log(".. Incoming Request: " + req.url);
    return res.end();
  });

  // console.log("Server Listening on port 8080 .....");
}).listen(8080);

console.log("Server Listening on port 8080 ...")