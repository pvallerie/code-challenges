# Staircase Traversal
You're given two positive integers representing the height of a staircase and the maximum number of steps that you can advance up the staircase at a time. Write a function that returns the number of ways in which you can climb the staircase.

For example, if you were given a staircase of `height = 3` and `maxSteps = 2` you could climb the staircase in 3 ways. You could take the 1 step, 1 step, then 1 step, you could also take 1 step, then 2 steps, and you could take 2 steps, then 1 step.

Note that `maxSteps <= height` will always be true.


## Attempt
```js
const staircaseTraversal = (height, maxSteps) => {
    // ways accumulator
    let ways = 0

    // base case
    if (maxSteps <= 0) {
        return ways
    }

    // recursion

    staircaseTraversal(maxSteps - 1)

    // if height is 0, return -1
    return -1
}

const height = 4
const maxSteps = 2
```

## Solution
```js
// iterative
const staircaseTraversal = (height, maxSteps) => {
    let currentNumberOfWays = 0
    const waysToTop = [1]

    for (let currentHeight = 1; currentHeight < height + 1; currentHeight++) {
        const startOfWindow = currentHeight - maxSteps - 1
        const endOfWindow = currentHeight - 1
        if (startOfWindow >= 0) currentNumberOfWays -= waysToTop[startOfWindow]

        currentNumberofWays += waysToTop[endOfWindow]
        waysToTop.push(currentNumberOfWays)
    }

    return waysToTop[height]
}
```