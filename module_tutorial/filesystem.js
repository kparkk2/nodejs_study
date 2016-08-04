var fs = require('fs');

// readFile(file, encoding, callback) : read asynchronously
// readFileSync(file, encoding) : read synchronously
// writeFile(file, data, encoding, callback) : write file asynchronously
// writeFile(file, data, encoding) : write file synchronously

/* read sync */
/*
var text = fs.readFileSync('input.txt', 'utf8');
console.log(text);

*/

/* read Async */
/*
fs.readFile('input.txt', 'utf8', function(error, data){
    console.log(data);
});
*/

var data = 'Hello World!\n';

fs.writeFile( 'output.txt', data, 'utf8', function(error){
    console.log('write file async complete');
});

fs.writeFileSync('output.txt', data, 'utf8');
console.log('write file sync complete');

