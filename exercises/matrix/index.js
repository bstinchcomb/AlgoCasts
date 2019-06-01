// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// Method One - I was on the right track, but I needed a hint
// Test time
function matrix(n) {
    let matrix = [...Array(n)].map(x=>Array(n).fill());
    let count = 1;
    let startCol = 0;
    let startRow = 0;
    let endCol = n - 1;
    let endRow = n - 1;

    // Four loops across (increment startRow), down (decrement endCol), 
    // back (decrement endRow), up (incement startCol)
    while (count <= n*n){        // Video lesson uses while (startCol <= endCol && startRow <= endRow) 
        // This loop goes forward across the top-most row
        for (var col = startCol; col <= endCol; col++){
            // Put 'count' into each position acrosss the row
            matrix[startRow][col] = count;
            count++;
        }
        startRow++; // Top-most row is now the next row

        // This loop move down the end-most column
        for(var row = startRow; row <= endRow; row++){
            // Put 'count' into each position going down the column
            matrix[row][endCol] = count;
            count++;
        }
        endCol--; // End column is full, move to the left

        // This loop moves up the back across the bottom-most row
        for (var col = endCol; col >= startCol; col--){
            // Put 'count' into each position on bottom row
            matrix[endRow][col] = count;
            count++;
        }
        endRow--; // Bottom row is filled, move up

        // Finally, go up the left-most column
        for(var row = endRow; row >=startRow; row --){
            // Put 'count' into each space up the column
            matrix[row][startCol] = count;
            count++;
        }
        startCol++;

        // Repeat as necessary
    }
    console.log('n = ' + n + ' ' + JSON.stringify(matrix));
    
    return matrix;
}

module.exports = matrix;
