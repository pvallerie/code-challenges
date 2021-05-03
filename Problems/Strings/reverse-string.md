# Reverse String
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

## Attempt
```py
class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        s = s.reverse()
```

## Solution
```py
class Solution:
    def reverseString(self, s):
        def helper(left, right):
            if left < right:
                s[left], s[right] = s[right], s[left]
                helper(left + 1, right - 1)

        helper(0, len(s) - 1)
```

```js
// chaining with built-in methods
const reverseString = string => {
    return string.split('').reverse().join('')
}

const string = 'pete'
reverseString(string)


// for loop
const reverseString = string => {
    newString = ''

    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i]
    }

    return newString
}

const string = 'pete'
reverseString(string)


// while loop (takes in array and modifies in place)
var reverseString = function(s) {
    let leftPointer = 0
    let rightPointer = s.length - 1
    
    while (leftPointer < rightPointer) {
        [s[leftPointer], s[rightPointer]] = [s[rightPointer], s[leftPointer]]
        leftPointer++
        rightPointer--
    }
};


// recursion
const reverseString = string => {
    // base case
    if (string === '') {
        return ''
    }

    // call recursively on string without the first letter and return the first letter
    // first letters pile up in the call stack and are returned starting at the top (last letter)
    return reverseString(string.substr(1)) + string.charAt(0)
}

const string = 'pete'
reverseString(string)
```
