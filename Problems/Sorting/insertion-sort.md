# Insertion Sort
Write a function that takes in an array of integers and returns a sorted version of that array. Use the Insertion Sort algorithm to sort the array.

If you're unfamiliar with Insertion Sort, we recommend watching the Conceptual Overview section of this question's video explanation before starting to code.

## Attempt
```js
const insertionSort = array => {
    // iterate over input array starting at idx 1
    for (let i = 1; i < array.length; i++) {
        // var to iterate backwards
        const revIdx = i - 1
        // while loop to check value backwards
        while (revIdx <= 0) {
            // if i < array[var]
            if (i < array[revIdx]) {
                // decrement revIdx
                revIdx--
            } else {
                // remove i
                // insert i where we are in while loop
                // shift items between var and i's original spot right
                // break

            }
        } 
    }
    
    // return array
}


const array = [8, 5, 2, 9, 5, 6, 3]
```

## Solution
```js
const insertionSort = array => {
    for (let i = 1; i < array.length; i++) {
        let j = i
        while (j > 0  && array[j] < [j - 1]) {
            swap(j, j - 1, array)
            j -= 1
        }
    }
    return array
}

const swap = (i, j, array) => {
    cont temp = array[j]
    array[j] = array[i]
    array[i] = array[j]
}
```