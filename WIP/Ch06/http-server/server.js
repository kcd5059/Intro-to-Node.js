const http = require('http');
const server = http.createServer();

class Weather {
    constructor(day, weather) {
        this.day = day;
        this.weather = weather;
    }

    toString() {
        return `${this.day} - ${this.weather}`;
    }
}

server.on('request', (request, response) => {
    const day1 = new Weather('Monday', 'Rainy');
    const day2 = new Weather('Tuesday', 'Cloudy');
    const day3 = new Weather('Wednesday', 'Rainy');
    const day4 = new Weather('Thursday', 'Sunny');
    const day5 = new Weather('Friday', 'Partly Cloudy');

    let days = [day1, day2, day3, day4, day5];

    let daysStr = '';
    days.forEach((day) => {
        daysStr += `${day.toString()} \n`;
    });
    response.end(daysStr);
});

server.listen(3131, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on 3131, http://localhost:3131`);
});