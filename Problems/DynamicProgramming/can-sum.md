# Can Sum
You're given an array of whole numbers `numbers` and a target sum `targetSum`. Return true if it is possible to sum to `targetSum` using some or all of the numbers in `numbers`. Otherwise, return false.

## Brute Force Recursion
```js
const canSum = (targetSum, numbers) => {
    // base cases
    // if we've subtracted to 0, return true
    if (targetSum === 0) return true
    // if we've subtracted beyond 0, return true
    if (targetSum < 0) return false

    // iterate through numbers
    for (let num of numbers) {
        // subtract current number from targetSum and set to remainder
        const remainder = targetSum - num

        // recursion
        // call canSum again on the remainder to see if it returns true/false
        // if it does return true
        if (canSum(remainder, numbers) === true) {
            // return true
            return true
        }
    }

    // otherwise, return false
    return false
}
```

### Memoization
```js
const canSum = (targetSum, numbers, memo={}) => {
    // base cases
    // check hash for targetSum and return value if found
    if (targetSum in memo) return memo[targetSum]
    // if we've subtracted to 0, return true
    if (targetSum === 0) return true
    // if we've subtracted beyond 0, return true
    if (targetSum < 0) return false

    // iterate through numbers
    for (let num of numbers) {
        // subtract current number from targetSum and set to remainder
        const remainder = targetSum - num

        // recursion
        // call canSum again on the remainder to see if it returns true/false
        // if it does return true
        if (canSum(remainder, numbers, memo) === true) {
            // store value in hash
            memo[targetSum] = true
            // return true
            return true
        }
    }

    // otherwise, store false in hash
    memo[targetSum] = false
    // and return false
    return false
}
```