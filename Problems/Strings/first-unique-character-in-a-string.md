# First Unique Character in a String
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

```
s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
 ```

Note: You may assume the string contains only lowercase English letters.

## Attempt
Python
```py
class Solution:
    def firstUniqChar(self, s: str) -> int:
        first_unique_index = -1

#         loop thorugh string
        for i in range(len(s)):
#             loop through string starting one ahead
            for j in range(i + 1, len(s)):
#                 check if first_unique_index and s[i] match
                if first_unique_index == s[i]:
#                     set first_unique_index to -1
                    first_unique_index = -1
                    break
#                 check if i and j match
                if s[i] != s[j]:
#                     if they don't set firstUniqueIndex to i
                    first_unique_index = i

        return first_unique_index
```

JavaScript
```js
const firstUniqChar = s => {
    // map to tally chars
    const letters = new Map
    
    // iterate over s
    for (let ltr of s) {
        // if ltr exists in map
        if (letters.has(ltr)){
            // tally up by 1
            letters.set(ltr, letters.get(ltr) + 1)
        } else {
            // add new key/val pair
            letters.set(ltr, 1)
        }
    }
    
    // iterate over map
    for ([key, value] of letters) {
        // if value is 1
        if (value === 1) {
            // return index of value in s
            return s.indexOf(key)
        }
    }
        
    // if no unique ltrs exist, return -1
    return -1
};
```

## Solution
Python
```py
class Solution:
    def firstUniqChar(self, s: str) -> int:
        """
        :type s: str
        :rtype: int
        """
        # build hash map : character and how often it appears
        count = collections.Counter(s)

        # find the index
        for idx, ch in enumerate(s):
            if count[ch] == 1:
                return idx
        return -1
```

JavaScript
```js
var firstUniqChar = s => {
    // iterate over s
   for(i=0;i<s.length;i++){

        // if the first index of current letter is the same as the last index of current letter
       if (s.indexOf(s[i])===s.lastIndexOf(s[i])){
           
        // return current index 
          return i;
      } 
   }

    // otherwise, return -1
   return -1;
};
```