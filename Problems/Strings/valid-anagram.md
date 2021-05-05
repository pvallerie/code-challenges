# Valid Anagram
Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

Example 1:
```
Input: s = "anagram", t = "nagaram"
Output: true
```
```
Example 2:

Input: s = "rat", t = "car"
Output: false
```

## Attempt
(accepted)
```js
const isAnagram = (s, t) => {
    // if s and t are not the same length, return false
    if (s.length !== t.length) return false
    
    // map to track letters
    const letters = new Map()
    
    // iterate over s
    for (let ltr of s) {
        // if ltr is in letters map
        if (letters.has(ltr)) {
            // add 1 to its value
            letters.set(ltr, letters.get(ltr) + 1)
        } else {
            // add key/val pair
            letters.set(ltr, 1)
        }
    }
    
    // iterate over t
    for (let ltr of t) {
        // if ltr is in letters map
        if (letters.has(ltr)) {
            // subtract 1 to its value
            letters.set(ltr, letters.get(ltr) - 1)
        } else {
            // add key/val pair
            letters.set(ltr, 1)
        }
    }
    
    // store values of map in variable
    const values = letters.values()
    
    // iterate over values of letters map
    for (let num of values) {
        // if any of them are not 0, return false
        if (num !== 0) return false
    }

    // return true
    return true
    
};
```

## Solution
```js
// more concise map method
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const map = {};
    
    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
    }
    
    for (let i = 0; i < t.length; i++) {
        if (map[t[i]]) map[t[i]]--;
        else return false;    
    }

    return true;
};
```

```js
// sort method
var isAnagram = function(s, t) {
    // sort each input string and compare
    // return true if the match, false if they don't
    return (sortStr(s) === sortStr(t));
};

// helper function to sort input strings
var sortStr = (str)=>{
    return str.split('').sort().join('')        
}
```

