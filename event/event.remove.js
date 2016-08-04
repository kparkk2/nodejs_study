var onUncaughtException = function(error){

    console.log('exception occured\n');

    process.removeListener('uncaughtException', onUncaughtException);
};

process.on( 'uncaughtException', onUncaughtException );

setInterval(function(){
    error.error.error('-_-');
}, 1000);
