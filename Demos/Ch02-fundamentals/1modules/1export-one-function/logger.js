const privateInfo = '****';

//anything not in exports is PRIVATE

module.exports = function(data) {
    console.log(data, privateInfo);
}

