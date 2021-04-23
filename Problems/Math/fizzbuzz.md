# FizzBuzz
Given an integer `n`, return a string array `answer` (1-indexed) where:

`answer[i] == "FizzBuzz"` if `i` is divisible by `3` and `5`.
`answer[i] == "Fizz"` if `i` is divisible by `3`.
`answer[i] == "Buzz"` if `i` is divisible by `5`.
`answer[i] == i` if non of the above conditions are true.
 

Example 1:
```
Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```

## Attempt
```js
var fizzBuzz = function(n) {
//     output accumulator
    const output = []
    
//     iterate from 1 to n
    for (let num = 1; num <= n; num++) {
    
//         if num is divisible by 5 and 3
        if (num % 5 === 0 && num % 3 === 0) {
//             push "FizzBuzz" into `output`
            output.push("FizzBuzz")            
        
//         elif num is divisible by 3
        } else if (num % 3 === 0) {
//             push "Fizz" into `output`
            output.push("Fizz")
    
//         elif num is divisible by 5
        } else if (num % 5 === 0) {
//             push "Buzz" into `output`
            output.push("Buzz")
        
    
//         else
        } else {
//             push num into `output` as a string
            output.push(num.toString())   
        }
    }

    return output
};
```

## Solution
```js
answer accepted
```