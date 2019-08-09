
        let myFirstPromise = new Promise((resolve, reject) => {
            //Inside this Promise, 
            // call the sych function
            // if it is successful, call resolve
            // if it is not, call the reject function
            let randomValue = Math.random();

            if (randomValue < 0.5) {
                    // Using timeout to simulate
                    setTimeout(function () {
                        resolve("Success!"); //Yay! Everything went well!
                    }, 250);
            }
            else {
                reject("didnt work");
            }
        });

        myFirstPromise
        .then((successMessage) => {
            //successMessage is whatever we passed in the resolve(...) function above.
            //It doesn't have to be a string, but if it is only a succeed message, it probably will be.
            console.log("Yay! " + successMessage);
        })
        .catch((failMessage) =>{
                console.error(failMessage);
        });

        console.log('This prints first');
   