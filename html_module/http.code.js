var fs = require('fs');
var http = require('http');

http.createServer(function(request,response){
    response.writeHead( 302, { 'Location' : 'http://www.naver.com' });
    response.end();
}).listen(52273,function(){
    console.log('server running at 127.0.0.1:52273');
});

/* 404 not found */
/*
http.createServer(function(request,response){
    response.writeHead( 404 );
    response.end();
}).listen(52273,function(){
    console.log('server running at 127.0.0.1:52273');
});
*/
