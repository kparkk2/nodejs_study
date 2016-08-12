var http = require('http');

http.createServer(function(request,response){
    // get cookies
    var cookie = request.headers.cookie;

    // set cookies
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': ['name=k', 'region=s']
    });

    // resonse
    response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
}).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});
