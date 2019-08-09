
const simpleNameArray = ['Adam',
    'Judy',
    'Cody'];

console.log(simpleNameArray[0]);

const ages = [45, 41, 1];

const person = {
    name: "Adam",
    age: 45,
    "last name": "Lipinski"
    //0: 'hello'
}

console.log(person.age);
console.log(person["name"])
const prop = "name";
console.log(person[prop]);

console.log(Object.keys(person));


const oneArray = [1, 2, 3];
const secondArray = [1, 2, 3];
console.log(oneArray == secondArray)

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

let p1 = new Person(`Jack`, `Johnson`);
let p2 = new Person(`Mary`, `Alice`);
let p3 = new Person(`Bill`, `Carrey`);

const people = [p1,p2,p3];

for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(`${element.lastname}, ${element.firstname}`);
}

people.sort(function(a,b) {
    if (a.firstname < b.firstname) {
        return -10;
    }
    else if (a.firstname > b.firstname) {
        return 10;
    }
    else {
        return 0;
    }
});

console.log(`after sort ****`);

for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(`${element.lastname}, ${element.firstname}`);
}

people.forEach(element => {
    console.log(element)
});



