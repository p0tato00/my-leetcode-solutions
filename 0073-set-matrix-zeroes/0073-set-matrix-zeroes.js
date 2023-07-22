/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            // Check if the cell has zero in it
            if (matrix[row][col] === 0) {
                for (let i = 0; i < matrix[0].length; i++) {
                    // Flag the entire column to -1 if not zero 
                    if (matrix[row][i] !== 0) {
                        matrix[row][i] = -1001
                    }
                }
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            // Check if the cell has zero in it
            if (matrix[row][col] === 0) {
                for (let i = 0; i < matrix.length; i++) {
                    // Flag the entire row to -1 if not zero 
                    if (matrix[i][col] !== 0) {
                        matrix[i][col] = -1001
                    }
                }
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            // Change the flag into zero
            if (matrix[row][col] === -1001) {
                matrix[row][col] = 0
            }
        }
    }
};