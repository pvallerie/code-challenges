# How Sum
If numbers in `numbers` array can add to `targetSum`, return an array with the numbers that add to `targetSum`.

## Brute Force Recursion
```js
const howSum = (targetSum, numbers) => {
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    for (let num of numbers) {
        const remainder = targetSum - num
        const remainderResult = howSum(remainder, numbers)

        if (remainderResult !== null) {
            // return array with remainderResult array + num
            memo[targetSum] = [ ...remainderResult, num ]
            return memo[targetSum]
        }
    }

    memo[targetSum] = null
    return null
}
```

## Memoization
```js
const howSum = (targetSum, numbers, memo{}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    for (let num of numbers) {
        const remainder = targetSum - num
        const remainderResult = howSum(remainder, numbers, memo)

        if (remainderResult !== null) {
            // return array with remainderResult array + num
            return [ ...remainderResult, num ]
        }
    }

    return null
}
```