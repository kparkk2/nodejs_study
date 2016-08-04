var EventEmitter = require('events');

//var custom = new process.EventEmitter();
var custom = new EventEmitter();

custom.on( 'tick', function(){
    console.log('run event!');
});

custom.emit('tick');
