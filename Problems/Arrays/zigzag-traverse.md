# Zigzag Traverse
Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n==m) and returns a one-dimensional array of all the array's elements in zigzag order.

Zigzag order starts at the top left corner of the two dimensional array, goes down by one element, and proceeds in a zigzag pattern all the way to the bottom right corner.

## Attempt
```js
const zigzagTraverse = array => {
    // accumulator
    const output = []

    // height and width
    const length = array[0].length - 1
    const height = array.length - 1

    // current element starts at top left
    let currElement = array[0][0]

    // while we have yet to hit the last element in the matrix (lastRow[lastColumn])
        // if at topLeft (array[0][0])
            // add currElement to output
            // move down one
        // if we hit left or bottom
            // move up
        // if we hit right or top
            // move down

    // move up
    const moveUp = () => {
        // add current element to output
        // move up and right
    }
    // move down
    const moveDown = () => {
        // add current element to output
        // move down and left
    }
        


    return output
}

const array = [
    [1, 3, 4, 10],
    [2, 5, 9, 11],
    [6, 8, 12, 15],
    [7, 13, 14, 16]
]
zigzagTraverse(array)
```

## Solution
```js
const zigzagTraverse = array => {
    const height = array.length - 1
    const width = array[0].length - 1
    const result = []
    let row = 0
    let column = 0
    let goingDown = true

    while (!isOutOfBounds(row, col, height, width)) {
        result.push(array[row][col])
        if (goingDown) {
            if (col === 0 || row === height) {
                goingDown = false
                if (row === height) {
                    col++
                } else {
                    row++
                }
            } else {
                row++
                col--
            }
        } else {
            if (row === 0 || col === width) {
                goingDown = true
                if (col === width) {
                    row++
                } else {
                    col++
                }
            } else {
                row--
                col++
            }
        }
    }
    return result
}

const isOutOfBounds = (row, col, height, width) => {
    return row < 0 || row > height || col < 0 || col > width
}
```