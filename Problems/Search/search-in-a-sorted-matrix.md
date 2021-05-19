# Search in a Sorted Matrix
You're given a two-dimensional array (a matrix) of distinct integers and a target integer. Each row in the matrix is sorted, and each column is also sorted; the matrix doesn't necessarily have the same height and width.

Write a function that returns an array of the row and column indices of the target integer if it's contained in the matrix, otherwise `[-1, -1]`.

## Attempt
```js
const searchInSortedMatrix = (matrix, target) => {
    // output array
    let output = [-1, -1]

    // iterate through parent array
    for (let row in matrix) {
        // search each row for target
        if (searchRow(target, row) === true) {
            break
        } else {
            continue
        }
    }

    // helper for searching rows
    const searchRow = (target, row) => {
        let idx = matrix[row].length - 1

        // if we hit target
        if (matrix[row][idx] = target) {
            // update output array
            output[0] = row
            output[1] = idx
            // return true to notify matrix loop to break
            return true
        } else if (matrix[row][idx] > target) {
            idx = Math.floor(idx / 2)
        }

        // return false to notify matrix loop to continue
        return false
    }

    // return output
    return ouput
}


const matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004]
]
const target = 44
```

## Solution
```js
const searchInSortedMatrix = (matrix, target) => {
    // pointers
    let row = 0
    let col = matrix[0].length - 1

    // loop through matrix from top right to bottom left
    // break if we reach either limits
    while (row < matrix.length && col >= 0) {
        // if current element is larger than target
        if (matrix[row][col] > target) {
            // move left one column
            col--
        // if current element is less than target
        } else if (matrix[row][col] < target) {
            // move down one row
            row++
        // if current element matches target
        } else {
            // return current row and col
            return [row, col]
        }
    }

    return [-1, -1]
}
```