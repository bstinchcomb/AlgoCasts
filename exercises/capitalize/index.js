// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Methos One - My attempt - test time ~0.89s
/* function capitalize(str) {
    var words = [];
    words.push(str[0].toUpperCase());
    for (var i = 1; i < str.length; i++){
	    if (str[i - 1] === " "){
	        words.push(str[i].toUpperCase());
	    }
	    else{
	        words.push(str[i]);
	    }
    }
var sentence = words.join("");
return words.join("");
} */

// Method Two - From the videos - test time ~0.89s
function capitalize(str) {
    const words = [];

    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(' ');
}

module.exports = capitalize;
