# Number of Ways to Make Change
Given an array of distinct positive integers representing coin denominations and a single non-negative integer `n` representing a target amount of money, write a function that returns the number of ways to make change for that target amount using the given coin denominations.

Note that an unlimited amount of coins is at your disposal.

## Attempt
```js
const numberOfWaysToMakeChange = (denoms, n) => {
    // accumulator array to collect num of ways to make change for each denomination (if n = 5, find change options for 1, 2, 3, 4, 5)
    const ways = []

    // loop from 0 to n
    for (let i in n) {
        // add each value to numWays
        ways.push(i)
    }


    // loop through denoms

        // determine number of ways to make change for 


    return ways.reduce((a, b) => a + b, 0)
}

const n = 6
const denoms = [1, 2]
```

## Solution
```js
const numberOfWaysToMakeChange = (denoms, n) => {
    // array to store number of ways to make change from 0 to n
    const ways = new Array(n + 1).fill(0)
    // only one way to make change for 0 (no coins)
    ways[0] = 1

    // loop through denoms array
    for (let denom of denoms) {
        // loop from 1 to n
        for (let amount = 1; amount <= n; amount++) {
            // check if we can make change for current amount with current denom
            if (denom <= amount) {
                // if we can, 
                ways[amount] += ways[amount - denom]
            }
        }
    }

    return ways[n]
}
```