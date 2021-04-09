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

Attempt:
```py
def reverse(self, x: int) -> int:
        # convert x to string and store in `int_as_str`
        int_as_str = str(x)
        
        # reverse string `int_as_str` and store in reversed_str
        reversed_str = int_as_str[::-1]
        
        # return reversed_stra
        return reversed_str
```

Solution:
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