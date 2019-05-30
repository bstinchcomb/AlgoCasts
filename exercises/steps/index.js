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

// Method One - My loopy first attempt (time 0.93s)
/* function steps(n) {
    for (var i = 0; i <n; i++){
        var result = '';
        for (var j = 0; j < n; j++){
            if (j <= i){result += '#';}
            else{result += ' ';}
        }
        console.log(result);
    }
} */

// Method Two - Recursive soultion from Algocasts video (Copied, because it got complicated) (test 0.96s)
// Step 2 - add row to the method call, so it is tracked
// Step 4 - add result to the call to declared and clear
function steps(n, row = 0, result = '') {
    // Step 1 - Set base case (when to stop)
    if(n === row){ // row is counted up until it reaches 'n'
        return;
    }

    // Step 3 - Are we at the end of a row, print
    if (result.length === n){
        console.log(result);
        //Step 5 - Make the call to our funtion for the next row
        return steps (n, row + 1);
        // Step 6 - if we are really done, then we need to end
    }
    
    // Step 7 - Figure out if value is '#' or ' '
    if(result.length <= row){
        result += '#';
    }
    else{
        result += ' ';
    }
    // Step 8 - Call the function again, no change to keep working on the same row
    steps (n, row, result);
}

module.exports = steps;
