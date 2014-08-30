/* Main Node Server file */

var http = require("http"); // load module for handeling http requests
var fs = require("fs"); // needed for file i/o

var requestHandler = function(request, response) {
    if(request.url === "/") {
        fs.readFile(__dirname + "/index.html", function(err, data) {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.end(data);
        });
    }
    else if(request.url === "/app.js") {
        fs.readFile(__dirname + "/app.js", function(err, data) {
            response.writeHead(200, { "Content-Type": "application/javascript" });
            response.end(data);
        });
    }
    // else if(request.url === "/time.json") {
    //  response.writeHead(200, { "Content-Type": "application/json" });
        
    //  var hour = new Date().getHours();
    //  var time = hour > 6 && hour < 20 ? "day" : "night";
        
    //  response.end('{ "time": "' + time + '" }');
    // }
};

http.createServer(requestHandler).listen(4000, function() { // activate server and listen on port #
    console.log("server listening on 4000");
}); 



