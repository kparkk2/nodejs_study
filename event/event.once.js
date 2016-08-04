process.once( 'uncaughtException', function(error){
    console.log( 'once' );
});

setInterval( function(){
    error.error.error('-_-');
}, 1000);

process.on( 'exit', function(){
    console.log('goodbye');
});
