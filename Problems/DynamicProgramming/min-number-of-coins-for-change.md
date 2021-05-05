# Min Number Of Coins For Change
Given an array of positive integers representing coin denominations and a single non-negative integer `n` representing a target amount of money, write a function that returns the smallest number of coins needed to make change for (to sum up to) that target amount using the given coin denominations.

Note that you have access to an unlimited amoun tof coins. In other words, if the denominatins are `[1, 5, 10]`, you have acess to an unlimited amount of `1`s, `5`s, and `10`s.

If it's impossible to make change for the target amount, return `-1`.

## Attempt
```js
const minNumberOfCoinsForChange = (n, denoms) {
    // output accumulator
    let output = [0]

    // iterate over denoms
    for (let i in denoms) {
        // if current element > n
        if (denoms[i] > n) {
            // move to next element
            continue
        } else {
            // add amount of coins needed with just current element
            if (n % denoms[i] === 0) {
                const coins = n / denoms[i]
                output.push(coins)
            }
            // add amount with other elements
        }
    }

    // if output === 0, return -1
    if (output.length === 1) {
        return -1
    }
    // otherwise return output
    return output.length

}

const n = 7
const denoms = [1, 5, 10]
```

## Solution
```js
const minNumberOfCoinsForChange = (n, denoms) => {
    const numOfCoins = new Array(n + 1).fill(Infinity)
    numOfCoins[0] = 0

    // iterate through denoms array
    for (const denom of denoms) {
        // loop from 0 until the length of n + 1
        for (let amount = 0; amount < numOfCoins.length; amount++) {
            // if current denom is less than or equal to current amount
            if (denom <= amount) {
                // add the smaller of current value in numOfCoins or 
                numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1)
            }
        }
    }
    return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1
}
```