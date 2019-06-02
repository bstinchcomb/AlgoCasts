// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Method One - Iterative Solution (test 0.92s (0.933s going to 50 and 100))
/* function fib(n) {
    if (n < 2){
        return n;
    }
    let old = 0;
    let next = 1;
    for (let i = 2; i <= n; i++) {
        fibo = old + next;
        old = next;
        next = fibo;
    }
    return fibo;
} */

// Method Two - Recursion (test 1.54s (147s going to 50))
// Memoized version test 1.033s going to 100
function fib(n) {
    // Find base case
    if (n < 2){
        return n;
    }

    return fib(n - 2) + fib (n - 1);
}

// Method Three - Udemy iterative version (test 0.915s (0.923s going to 50 and 100)) I would never have come up with this
/* function fib(n) {
    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        const a = result [i - 1];
        const b = result [i - 2];

        result.push (a + b);
    }

    return result[n];
} */

function memoize(fn){
    const cache = {};
    return function(...args) {
        if(cache[args]) {
            return cache[args];
        }
        const result = fn.apply(this.args);
        cache[args] = result
    }
}

fib = memoize(fib);

module.exports = fib;
