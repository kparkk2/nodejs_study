exitFunc = function(){
    process.exit();
}

process.argv.forEach( function(item, index) {
    //print
    console.log( index + ' : ' + typeof( item ) + ' : ' + item );

    // when argv is '--exit'
    if( item == '--exit' )
    {
        //get next argv
        var exitTime = Number( process.argv[ index + 1 ] );

        //exit after given time
        setTimeout( exitFunc, exitTime );
    }
});
