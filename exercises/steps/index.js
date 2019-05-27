// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Method One - My loopy first attempt
function steps(n) {
    for (var i = 0; i <n; i++){
        var result = '';
        for (var j = 0; j < n; j++){
            if (j <= i){result += '#';}
            else{result += ' ';}
        }
        console.log(result);
    }
}

module.exports = steps;
