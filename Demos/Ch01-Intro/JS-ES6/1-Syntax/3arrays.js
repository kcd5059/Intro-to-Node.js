
            const simpleNameArray = ['Adam','Judy','Cody'];
            const ages = new Array(45, 41, 1);
            
            console.log(simpleNameArray[2] + ' is ' + 
                                   ages[2] + ' years old');

            const person = {
                name: "Adam",
                age: 45
            }

           const oneArray = [1,2,3];
           const secondArray = [1,2,3];

           console.log(oneArray == secondArray)


            const bands = [];
            bands.push('The Beatles');
            bands.push('Aerosmith');
            bands.push('The Temptations');
            console.log('After three pushes:');
            console.log(bands); // ['The Beatles', 'Aerosmith', 'The Temptations']

            const aBand = bands.pop();
            console.log(aBand);
            console.log(bands); // ['The Beatles', 'Aerosmith']

            //Slicing
            console.groupCollapsed('Slicing...');
            const values = ['a','b','c','d','e'];
            console.log(values.slice()); // ['a', 'b', 'c', 'd', 'e']
            console.log(values.slice(1)); //  ['b', 'c', 'd', 'e']
            console.log(values.slice(1,3)); //  ['b', 'c']
            console.log(values.slice(-2)); // ['d', 'e'] 
            console.groupEnd();

            //Sorting
            console.groupCollapsed('Sorting...');
           
            const letters = ['z','q','e','a','q','j','i']; //
            console.log(letters.sort());
                        // ['a', 'e', 'i', 'j', 'q', 'q', 'z']

            var scores = [1, 10, 21, 2]; 
            console.log(scores.sort()); 
            
            
            // [1, 10, 2, 21]
            
            console.log(scores.sort( (a,b)=> {
                console.log(`a,b`, a, b)
                //return a - b;
                if (a<b) {
                    return -1;
                }
                else if (b<a) {
                    return 1;
                }
                else {
                    return 0;
                }
            })); 
            
            // What's going on here?
            console.groupEnd();
