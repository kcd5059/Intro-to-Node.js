const events = require("events");

function createWork() {
	function work() {
		this.emit("work");
	}
	
	return Object.assign(new events.EventEmitter(), {
		work: work
	});
}

function createBreak() {
	function takeBreak() {
		this.emit("break");
	}
	
	return Object.assign(new events.EventEmitter(), {
		takeBreak: takeBreak
	});
}

let work = createWork();
let aBreak = createBreak();

work.once("work", () => {
    console.log("*******");
    console.log("Clocking in...");
});

aBreak.on("break", () => {
    console.log("Check Emails");
})

work.on("work", () => {
    console.log("Write Tests");
    console.log("Code");
    console.log("Refactor");
    console.log("Go to Meeting");
    aBreak.emit("break");
    console.log("*******");
});


work.work();
work.work();

const sighting = Object.assign(new events.EventEmitter(), {
    sighting: function() {
        this.emit("sighting");
    }
});

let count = 0;
sighting.on("sighting", () => {
    console.log("11 sighted!");
    console.log(++count, ' times');
});

const timer = setInterval(() => {
    if(Math.floor((Math.random() * 12)) === 11) {
        sighting.sighting();
    }
}, 1);


sighting.on("sighting", () => {
    console.log(++count, ' times');

    if(count > 100) {
        clearInterval(timer);
    }
});

