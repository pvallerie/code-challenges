# Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, assume that your function returns 231 − 1 when the division result overflows.

```js
var divide = function(dividend, divisor) {
//  base cases for divisors of 0, 1, -1
    if (dividend === 0) {
        return 0
    } else if (divisor === 1) {
        return dividend
    } else if (divisor === -1) {
        if (dividend > 0) {
            return 0 - dividend
        }
        return Math.abs(dividend)
    }
    
    
//  accumulator
    let total = 0
    let counter = 0
    
//  absolute value of divisor
    const absDivisor = Math.abs(divisor)
    
//  while loop until total > dividend
    while (total <= dividend) {
        total += absDivisor
        counter++
    }
    
//  once quotient > dividend, subtract divisor and return
    if (divisor < 0) {
        const negCounter = 0 - counter + 1
        return negCounter
    } else {
    return counter - 1
    }
};
```