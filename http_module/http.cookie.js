var fs = require('fs');
var http = require('http');

http.createServer(function(request,response){

    var date = new Date();
    date.setDate(date.getDate() + 7);

    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': [
        'name1 = value1; Expires=' + date.toUTCString(),
        'name2 = value2'
        ]
        });
    response.end('<h1>'+request.headers.cookie + '</h1>');
}).listen(52273,function(){
    console.log('server running at 127.0.0.1:52273');
});
