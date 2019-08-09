
            console.log('Array.map()');
            const mapValues = [1,2,3,4,5];
            const items = mapValues.map(function(value) {
            return "Item: " + value;
            });
            console.log(items);
            console.log('');

            console.log('Array.forEach()');
            const forEachValues = [1,2,3,4,5];
            forEachValues.forEach(function(currentValue) {
                console.log(`The current value is ${currentValue}`);
            });
            console.log('');

            console.log('Array.reduce()');
            const reduceValues = [10, 40, 50];
            let sum = 0;
            sum = reduceValues.reduce(function(value, accum) {
            return accum + value;
            }, sum);
            console.log(`Sum is ${sum}`);
            console.log('');

            console.log('Array.find()');
            const haystack = ['Apple', 'Banana', 'Cherry'];
            const needle = haystack.find(function(currentValue) {
                return currentValue.startsWith('B');
            });
            console.log('Needle is: ' + needle);
            console.log('');

            console.log('Array.filter()');
            const numbers = [1,2,3,4,5,6];
            const evens = numbers.filter(function(currentValue) {
            return currentValue % 2 == 0;
            });
            console.log('Evens are: ' + evens.join(', '));

       