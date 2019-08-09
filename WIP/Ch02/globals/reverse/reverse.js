module.exports = function(original) {
    let reversed = [];

    for(let i = 0; i < original.length; i++) {
        reversed.push(original.substring(i, i+1));
    }

    return reversed.reverse().toString().replace(/,/gi, '');
}