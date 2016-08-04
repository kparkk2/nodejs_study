process.on('exit', function(){
    console.log('say goodbye');
});
process.on('exit', function(){
    console.log('T_T');
});

// exit really
process.exit();

// pseudo-exit(do not exit really)
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log('program is running');
