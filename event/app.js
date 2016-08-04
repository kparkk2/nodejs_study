var rint = require('./rint');

process.on('exit', function(){
    console.log('timer is off - goodbye.');
});

var count = 0;
rint.timer.on('tick', function(){
    count++;
    console.log(count + ' RUN EVENT!');
});
