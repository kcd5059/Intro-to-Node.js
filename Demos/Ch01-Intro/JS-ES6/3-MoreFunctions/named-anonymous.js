
            function namedFunction(name) {
                alert('namedFunction was passed:  '  + name );
            }

            namedFunction('Alice')
            
            const anotherReferenceToFunction = namedFunction;
            anotherReferenceToFunction('Clarice');

            const anonFunction = function() {
                alert('John Doe');
            }

            anonFunction();
        