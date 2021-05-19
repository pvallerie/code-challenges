# Valid Palindrome


## Attempt
(accepted)
```js
var isPalindrome = function(s) {
//     new string with non-alphanumeric chars removed and all lower case
    const newStr = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    
//     store halves in variables
    const firstHalf = newStr.slice(0, Math.floor(newStr.length / 2))
    const secondHalf = newStr.slice(Math.ceil(newStr.length / 2))
    
//     reverse secondHalf
    const reversedSecondHalf = secondHalf.split('').reverse().join('')
    
    // if the halves match, return true
    if (firstHalf === reversedSecondHalf) return true
    
    return false
};
```

```js
var isPalindrome = function(s) {
    const forwards = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    const backwards = forwards.split("").reverse().join("")
    return forwards === backwards
};
```

## Solution
```js

```