// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Method One - used a bit of Google to validate RegEx
//  Turns out this is the second method presented in the videos
function anagrams(stringA, stringB) {
    var tempA = stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
    var tempB = stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
    
    // Added these to check result of manipulation above
    // console.log('stringA = ' + tempA);
    // console.log('stringB = ' + tempB);
    
    return tempA === tempB;
}


// Method Two - Copied from Algocast Lesson to check time/performance
// This took 1.135s, above took 1.118s on first run
// After repeated tries this return .985s, above returns .896s
/* function anagrams(stringA, stringB) {
     const aCharMap = buildCharMap(stringA);
     const bCharMap = buildCharMap(stringB);

     if (Object.keys(aCharMap) !== Object.keys(bCharMap)){
         return false;
     }

     for (let char in aCharMap) {
         if (aCharMap[char] !== bCahrMap[char]) {
             return false;
         }
     }

     return true;
}

function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
} */


module.exports = anagrams;
