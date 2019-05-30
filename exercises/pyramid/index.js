// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Method One - my solution (with a hint from the video) (test 0.904s)
/* function pyramid(n) {
    // Set up loop for row
    for (let row = 0; row < n; row++)
    {
        let level = '';
        // Set up loop for column
        for (let column = 0; column < (n + (n-1)); column++)
        {
            if(column >= n-1-row && column <= n-1+row){
                level += '#';
            }
            else{
                level += ' ';
            }
        }
        console.log(level);
    }
} */

// Method Two - Something from the comments (key is using string.repeat) (test 0.904s)
/* function pyramid(n) { 
    for (let i=1;i<=n;i++){
        let base = '#',
            hashes = '#'.repeat(i-1),
            spaces = ' '.repeat(n-i);
        base = spaces+hashes+base+hashes+spaces;
        console.log(base);
    }
} */

// Method Three - Copied recursion solution (test 0.905s)
// Note: removing midpoint calculation and using n - 1 makes test time 0.899s
function pyramid(n, row = 0, level = '') {
    if ( row === n) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    // const midpoint = Math.floor((2*n-1)/2);
    let add;
    if (n - 1 - row <= level.length && n - 1 + row >= level.length) {
        add = '#';
    }
    else {
        add = ' ';
    }
    pyramid(n, row, level + add);
}

module.exports = pyramid;
