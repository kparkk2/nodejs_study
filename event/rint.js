const EventEmitter = require('events');

exports.timer = new EventEmitter();

var count = 0;
var id = setInterval(function(){
    count++;
    if(count == 5){clearInterval(id);}
    exports.timer.emit('tick');
}, 1000);
