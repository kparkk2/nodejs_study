var http = require('http');

http.createServer(function(request,response){
    // get cookies & parse
    var cookie = request.headers.cookie;
    cookie = cookie.split(';').map(function(element){
        var element = element.split('=');
        return {
            key: element[0],
            value: element[1]
        };
    });

    // make cookies
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': ['name=page', 'region=korea', 'time=noon', 'color=black']
    });

    // resonse
    response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
}).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});
