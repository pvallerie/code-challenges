# Non-Constructable Change
Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).

For example, if you're given `coins = [1, 2, 5]`, the minimum amount of change that you can't create is `4`. If you're given no coins, the minimum amount of change that you can't create is `1`.

## Attempt
```js
const nonConstructableChange = coins => {
// if no change, return `1`
// sort the input array
// 
}
```

## Solution
```js
const nonConstructable = coins => {
    // sort input array
    coins.sort((a, b) => a - b)

    // accumulator for current change
    let currentChangeCreated = 0

    // loop through input array
    for (const coin of coins) {
        // check if value of current coin is greater than current change plus 1
        // if it is, current change plus 1 is our minimum amount of change we cannot make
        if (coin > currentChangeCreate + 1) return currentChangeCreated + 1

        // add value of current coin to accumulator
        currentChangeCreated += coin
    }

    return currentChageCreate + 1
}
```