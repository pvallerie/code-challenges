# Move Element to End
You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.

The function should perform this in place (i.e. it should mutate the input array) and doesn't need to maintain the order of the other integers.

## Attempt
```js
const moveElementToEnd = (array, toMove) => {
    // accumulator to collect number of moves and current spot in array
    let numMoves = 0
    let idx = 0

    // once numMoves + current idx equals the length of the array, we're done
    while (numMoves + idx < array.length) {
        if (array[idx] === toMove) {
            // remove number and put at the end
            array.push(array[idx])
            array.splice(idx, 1)
            numMoves++
        } else {
            idx++
        }
    }
    return array
}

const array = [2, 1, 2, 2, 2, 3, 4, 2]
const toMove = 2
moveElementToEnd(array, toMove)
```

## Solution
```js
// swapping method
const moveElementToEnd = (array, toMove) => {
    // pointers
    let i = 0
    let j = array.length - 1

    while (i < j) {
        while (i < j && array[j] === toMove) {
            j -= 1
        }

        // if we find a match to toMove, swap i and j
        if (array[i] === toMove) {
            array[i] = array[j]
            array[j] = array[i]
        }
        i += 1
    }
    return array
}
```