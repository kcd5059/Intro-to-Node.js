let weather = [
    {day: "Monday", high: 80, low: 68},
    {day: "Tuesday", high: 85, low: 1},
    {day: "Wednesday", high: 100, low: 73},
    {day: "Thursday", high: 89, low: 80},
    {day: "Friday", high: 93, low: 85}
];

let lowestTemp = weather.reduce((lowest, currentValue) => {
    if(currentValue.low < lowest.low) {
        return currentValue;
    } else {
        return lowest;
    }
});

let highestTemp = weather.reduce((highest, currentValue) => {
    if(currentValue.high > highest.high) {
        return currentValue;
    } else {
        return highest;
    }
});

console.log(`The lowest temperature this week was on ${lowestTemp.day} and it was ${lowestTemp.low}`);
console.log(`The lowest temperature this week was on ${highestTemp.day} and it was ${highestTemp.high}`);