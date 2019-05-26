// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    var tempA = stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('').trim();
    var tempB = stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('').trim();
    console.log('stringA = ' + tempA);
    console.log('stringB = ' + tempB);
    
    if (tempA === tempB) {
        return true;
    } else {
        return false;
    }


}

module.exports = anagrams;
