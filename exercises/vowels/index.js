// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// Method One - (test 2.88s)
function vowels(str) {
    let count = 0;
    for (let char of str) {
        vowels = /[aeiouAEIOU]/g;
        if (vowels.test(char)){
            count++;
        }
    }
    return count;
}

// Method Two - from StackOverflow (test 2.95s)
/* function vowels(str) {
    var matches = str.match(/[aeiou]/gi);
    return matches === null ? 0 : matches.length;
} */

// Method 3 - from another site (test 2.95s)
/* function vowels(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize counter
    let counter = 0;

    // Loop through text to test if each character is a vowel
    for (let letter of str.toLowerCase()){
        if (vowels.includes(letter)) {
            counter++
        }
    }
    return counter;
} */


module.exports = vowels;
