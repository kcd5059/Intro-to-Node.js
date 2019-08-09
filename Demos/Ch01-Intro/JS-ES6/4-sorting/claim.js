class Claim {
    constructor(ssn, firstName, lastName){
        this.ssn = ssn;
        this.first = firstName;
        this.last = lastName;
    }

}

const claims = [
    new Claim('123456789', 'Joe','Smith'),
    new Claim('745345363', 'Jon','Jones'),
    new Claim('046323432', 'Abe','Baeuer')
];

console.log(claims);

claims.sort(function(one, two) {
    if (one.last < two.last) {
        return -1;
    }
    else if(one.last > two.last) {
        return 1;
    }
    else {
        return 0;
    }

   

});

console.log(claims);


