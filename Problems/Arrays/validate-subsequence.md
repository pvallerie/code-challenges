# Validate Subsequence
Given 2 non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that arent necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbmers `[1, 3, 4]` form a subsequence of the array `[1, 2, 3, 4]`, and so do the  numbers `[2, 4]`. Note that a single number in an array and the array itself are both valid subsequences of the array.

## Attempt
```js
const isValidSubsequence = (array, subsequence) => {
    // pointer for current position in subsequence
    let subsequencePointer = 0

    // while value subsequencePointer is less than length of subsequence
    while (subsequencePointer < subsequence.length) {
        // loop through main array
        for (i in array) {
                // if current value is in subsequence
                if (subsequence.includes(array[i])) {
                    // increment the the subsequencePointer
                    subsequencePointer++
            }
        }
    }

    // if we finish looking through the main array and haven't found all the values of subsequence
    if (subsequencePointer < subsequence.length) {
        // it is not a subsequence
        return false
    }
        
    return true
}


const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10]

isValidSubsequence(array, sequence)
```

## Solution
```js
const isValidSubsequence = (array, sequence) => {
    // pointer for subsequence array
    let seqIdx = 0

    // loop through main array
    for (const value of array) {
        // if we've reached the end of the subsequence, break out of loop
        if (seqIdx === sequence.length) break
        // if current value in subsequence matches current value in main array, increment the subsequence pointer
        if (sequence[seqIdx] === value) seqIdx++
    }
    // checks if we've made it to the end of the subsequence
    // if we did, returns `true`
    // otherwise, return `false`
    return seqIdx === sequence.length
}
```