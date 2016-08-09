var fs = require('fs');
var http = require('http');

server = http.createServer(function(request,response){
    fs.readFile('index.html', function(error,data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
}).listen(52273,function(){
    console.log('server running at 127.0.0.1:52273');
});

server.on('connection', function(){
    console.log('connected 52273');
});

server.on('close', function(){
    console.log('close');
});

server2 = http.createServer(function(request,response){
    fs.readFile('1.mp4', function(error,data){
        response.writeHead(200, {'Content-Type': 'audio/mp4'});
        response.end(data);
    });
}).listen(52274,function(){
    console.log('server running at 127.0.0.1:52274');
});

server2.on('connection', function(){
    console.log('connected 52274');
});

http.createServer(function(request,response){
    fs.readFile('1.png', function(error,data){
        response.writeHead(200, {'Content-Type': 'image/png'});
        response.end(data);
    });
}).listen(52275,function(){
    console.log('server running at 127.0.0.1:52275');
});
