var fs = require('fs');

/* read & write sync */
/*
try{
    var data = fs.readFileSync('input.txt', 'utf8');
    console.log(data);
} catch(e){
    console.log(e);
}

try{
    fs.writeFileSync('output.txt', 'Hello World..!\n', 'utf8');
    console.log('FILE WRITE COMPLETE');
} catch(e){
    console.log(e);
}
*/

/* read & write async */
fs.readFile( 'input.txt', 'utf8', function(e, data){
    if(e){
        console.log(e);
    } else{
        console.log(data);
    }
});

fs.writeFile('output.txt', 'Hello World..!\n', 'utf8', function(e){
    if(e){
        console.log(e);
    } else{
        console.log('WRITE FILE COMPLETE!');
    }
});
