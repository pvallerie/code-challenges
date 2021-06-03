# Max Sum Increasing Subsequence
Write a function that takes in a non-empty array of integers and returns the greatest sum that can be generated from a strictly-increasing subsequence int he array as well as an array of the numbers in that subsequence.

A subsequence of an array is a set of numbers that aren't necessarily adjacent inthe array but that are inthe same order as they appear in the array. For instance, the numbers `[1, 3, 4]` for a subsequence of the array `[1, 2, 3, 4]`, and so do the numbers `[2, 4]`. Note that a single number in an array and the array itself are both valid subsequences of the array.

You can assume that there will only be one increasing subsequence with the greatest sum.

## Attempt
```js
const maxSumIncreasingSubsequence = array => {
    let sum = array[0]
    const subsequence = [array[0]]

    // iterate through input array starting at 2nd element
    for (let i = 1; i < array.length; i++) {
        // if current element > last element in subsequence
        if (array[i] > subsequence[subsequence.length - 1]) {
            // add it to subsequence
            subsequence.push(array[i])
            // add value to sum
            sum += array[i]
        // else
        } else {
            // replace last element in subsequence with current element
            subsequence[subsequence.length - 1] = array[i]
            // set sum equal to current element
            sum = array[i]
        }
    }

    return [sum, subsequence]
}

const array = [10, 70, 20, 30, 50, 11, 30]
maxSumIncreasingSubsequence(array)
```

```js
const maxSumIncreasingSubsequence = array => {
    let sum = array[0]
    let subsequence = []
    const subs = new Map()

    // iterate through input array starting at 2nd element
    for (let i = 1; i < array.length; i++) {
        sum = array[i - 1]
        subsequence = [array[i - 1]]
        // iterate through array starting at current element + 1
        for (let j = i + 1; j < array.length; j++) {
            // if current element > last one in subsequence
            if (array[j] > subsequence[subsequence.length - 1]) {
                // add it to subsequence
                subsequence.push(array[j])
                // add its value to sum
                sum += array[j]
            }
        }
        // add sum and subsequence to subs map
        subs.set(sum, subsequence)
    }

    let greatestSum = 0
    let greatestSub = []

    // iterate through subs map
    for (let [ key, value ] of subs) {
        // if current key > greatestSum
        if (key > greatestSum) {
            // greatestSum = current key
            greatestSum = key
            // greatestSub = current value
            greatestSub = value
        }
    }

    return [greatestSum, greatestSub]
}

const array = [10, 70, 20, 30, 50, 11, 30]
maxSumIncreasingSubsequence(array)
```

## Solution
```js
const maxSumIncreasingSubsequence = array => {
    const sequences = new Array(array.length)
    const sums = array.map(num => num)
    let maxSumIdx = 0

    for (let i = 0; i < array.length; i++) {
        const currentNum = array[i]
        for (let j = 0; j < i; j++) {
            const otherNum = array[i]
            if (otherNum < currentNum && sums[j] + currentNum >= sums[i]) {
                sums[i] = sums[j] + currentNum
                sequences[i] = j
            }
        }
        if (sums[i] >= sums[maxSumIdx]) maxSumIdx = i
    }
    return [sums[i] >= sums[maxSumIdx], buildSequence(array, sequences, maxSumIdx)]
}

const buildSequence = (array, sequences, currentIdx) => {
    const sequence = []
    while (currentIdx !== undefined) {
        sequence.unshift(array[currentIdx])
        currentIdx = sequences[currentIdx]
    }
    return sequence
}
```