
            function printStars() {
                    console.log('**************');
            }

            printStars();

            function printDoctor(localFirstName, localLastName) {
                    localFirstName = "Dr. " + localFirstName;
                    console.log(localFirstName + ' ' + localLastName);
            }

            firstName = 'Bob';
            lastName = 'Williams';
            printDoctor(firstName, lastName);
            console.log('after function call, name is ' + firstName);

            let someGuy = {firstName: "Jack",
                            lastName: "smith"};
            function makeDoctor(person) {
                person.firstName = "Dr. " + person.firstName;
            }
            makeDoctor(someGuy);
            console.log('is he a dr?', someGuy.firstName)

            function returnFullName(firstName, lastName) {
                    return (firstName + ' ' + lastName);
            }

            const fullName = returnFullName('Jackie', 'Chan');

            console.log(fullName);

            let car = {
                    make: 'Toyota',
                    license: '1X3hg7'
            }

            function getVanityPlate (car) {
                car.license = '1111'
            }

            getVanityPlate(car);

            console.log(car);
          