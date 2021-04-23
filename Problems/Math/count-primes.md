# Count Primes
Count the number of prime numbers less than a non-negative number, `n`. 

Example 1:
```
Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
```
Example 2:
```
Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 0
```

## Attempt
```js
var countPrimes = function(n) {
//     accumulator for number of primes found
    let numPrimes = 0

//     define function to check if prime
    const isPrime = num => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false
        return num > 1
        }
    }
        
//     loop from 1 to n
    for (let i = 1; i <= n; i++) {
//         if `i` is prime
        if (isPrime(i)) {
//             increment `numPrimes`
            numPrimes += 1
        }
    }
        
    return numPrimes
};
```

## Solution
```js

```