let firstName = 'Abe';
let lastName = 'Lincoln';

function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.getFullName = function() {
        return `${this.fname} ${this.lname}`
    }
}

let person1 = new Person(firstName, lastName);
person1.fname = 'xxxxx';
console.log(person1.getFullName());

