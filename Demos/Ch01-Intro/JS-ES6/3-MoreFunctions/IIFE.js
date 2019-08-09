
        var agingService = function () {
            let age = 0;

            this.showAge = function () {
                age++;
                console.log('age is ' + age);
            };

            return this;

        }();

        agingService.showAge();
        agingService.showAge();
  