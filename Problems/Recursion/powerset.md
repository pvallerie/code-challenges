# Powerset
Write a function that takes in an array of unique integers and returns its powerset.
The powerset`P(X)` of a set `X` is the set of all subsets of `X`. For example, the powerset of `[1, 2]` is `[[], [1], [2], [1, 2]]`.
Note that the sets in the powerset do not need to be in any particular order.

## Attempt
```js
const findPowerset = array => {
    // set accumulator for powerset
    const powerset = []

    // base case
    // if last element in powerset array is equal to input array
    if (powerset[powerset.length - 1] === array) {
        return powerset
    } else {
        powerset.push(array)
        // find powerset of last element in input array
        findPowerset([array[array.length - 1]])

        // remove last element in array
        array.pop()
        // find powerset of input array without last element
        findPowerset(array)
    }
}

const inputArray = [1, 2]
findPowerset(inputArray)
```

## Solution
Iterative Solution
```js
const powerset = array => {
    subsets = [[]]
    for (const ele of array) {
        const length = subsets.length
        for (let i = 0; i < length; i++) {
            const currentSubset = subsets[i]
            subsets.push(currentSubset.concat(ele))
        }
    }
    return subsets
}
```

Recursive Solution
```js
const powerset = (array, idx = null) => {
    if (idx === null) {
        idx = array.length - 1
    }
    if (idx < 0) {
        return [[]]
    }
    const ele = array[idx]
    const subsets = powerset(array, idx - 1)
    const length = subsets.length
    for (let i = 0; i < length; i++) {
        const currentSubset = subsets[i]
        subsets.push(currentSubset.concat(ele))
    }
    return subsets
}
```