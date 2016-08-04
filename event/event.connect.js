process.on('exit', function(){
    console.log( 'goodbye' );
});

process.on( 'uncaughtException', function(e){
    console.log('exception occured\n');
});

var count = 0;
var id = setInterval(function(){
    count++;

    if(count == 30){ clearInterval(id); }
    error.error.error();
}, 200);
