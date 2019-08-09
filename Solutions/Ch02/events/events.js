const events = require('events');
const emitter = new events.EventEmitter();

const doWorkHandler1 = function() {
    console.log('Write Tests');
}

const doWorkHandler2 = function() {
    console.log('Code');
}

const doWorkHandler3 = function() {
    console.log('Refactor');
}

const doWorkHandler4 = function() {
    console.log('Check Emails');
}

emitter.on('work', ()=> {console.log('*******')});
emitter.once('work', ()=>{
    console.log('Clocking in...');
});
emitter.on('work', doWorkHandler1);
emitter.on('work', doWorkHandler2);
emitter.on('work', doWorkHandler3);
emitter.on('work', ()=> {
    console.log('Go to Meeting');
    
});

// Bonus
emitter.on('work', doWorkHandler4);
emitter.on('break', ()=> {console.log('*******')});
emitter.on('break', doWorkHandler4);


emitter.emit('work');
emitter.emit('work');
emitter.emit('break');



