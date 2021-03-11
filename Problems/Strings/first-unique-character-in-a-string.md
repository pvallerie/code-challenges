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

## Solution
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
