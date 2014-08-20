var http = require("http");

http.createServer(function(request, response) {
  //response.writeHead(200, {"Content-Type": "text/plain"});
  //response.write("Hello World");
  //response.end();
  response.writeHead(200, {"Content-Type": "html"});
  //response.write(index.html);
}).listen(8000);