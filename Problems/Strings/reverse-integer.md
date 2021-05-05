# Reverse Integer
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
```
Input: x = 123
Output: 321
```
Example 2:
```
Input: x = -123
Output: -321
```
Example 3:
```
Input: x = 120
Output: 21
```
Example 4:
```
Input: x = 0
Output: 0
```

## Attempt:
Python
```py
def reverse(self, x: int) -> int:
        # convert x to string and store in `int_as_str`
        int_as_str = str(x)
        
        # reverse string `int_as_str` and store in reversed_str
        reversed_str = int_as_str[::-1]
        
        # return reversed_stra
        return reversed_str
```

JavaScript (accepted)
```js
var reverse = function(x) {
//     convert x to string so it can be iterated over
    const intAsStr = x.toString()

//     accumulator array for digits
    const digits = []
    
//     iterate over string
    for (const dgt in intAsStr) {
        // put each digit at beginning of digits array
        digits.unshift(intAsStr[dgt])
    }
    
//     join digits together and convert to int
    const reversed = digits.join('')
    
//     if negative
    if (x < 0) {
//         make negative
        const negInt = 0 - parseInt(reversed)
        
//         check size of output int and return 0 if too many bits
        if (negInt < -2147483648) {
            return 0
        }
        return negInt
    }

    const posInt = parseInt(reversed)
    
//         check size of output int and return 0 if too many bits
    if (posInt > 2147483648) {
        return 0
    }
    return posInt
};
```

## Solution:
Python
```py
def reverse(self, x: int) -> int:
        # find absolute value of x
        # convert x to a string
        # reverse string x
        # convert string x to an int
        # store in rev
        rev = int(str(abs(x))[::-1])

        # check length of rev, if longer than 32 bit, return 0
        # check if x is less than 0, if it is, return negative rev
        # otherwise return rev
        return (-rev if x < 0 else rev) if rev.bit_length() < 32 else 0
```

JavaScript
```js
const reverse = x => {
        // set variable for bit size limit
        const limit = 2147483648;

        // set variable for pos vs. neg
        const k = x < 0 ? -1 : 1;

        // take abs val of x, convert to str, split it, reverse it, join with '', convert to int
        const n = Number(String(Math.abs(x)).split('').reverse().join(''));

        // return 0 if outside bit range
        // or return abs val of reversed int * pos/neg variable
        return n > limit ? 0 : n * k;
};
```