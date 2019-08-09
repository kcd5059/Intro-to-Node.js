
        function Person() {
            // The Person() constructor defines `this` 
            // as an instance of itself.
            this.age = 0;

            this.getOlder = function() {
                // `this` is the global object, 
                // different from the `this`
                // defined by the Person() constructor
                this.age++;
                console.log(age);
            };
        }

        var student = new Person();
        student.getOlder();
