# Longest Palindromic Substring
Write a function that, given a string, return sits longest palindromic substring.

A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

You can assume that there will only be one longest palindromic substring.

## Attempt
```py
def longestPalindromicSubstring(string):
  # set left and right sides
  left_side = string[0:len(string) // 2]
  right_side_even = string[len(string) // 2:len(string)]
  right_side_odd = string[len(string) // 2 + 1:len(string)]
  right_side = null

  palindromes = {}

  # determine if string odd or even
  if len(string) % 2 == 0:
    right_side = right_side_even
  else:
    right_side = right_side_odd

  # if palindrome, add it to hash table with its length
  if left_side == right_side:
    palindromes[string] = len(string)


string = "abaxyzzyxf"
```

## Solution
```py
def longestPalindromicSubstring(string):
  currentLongest = [0, 1]
  for i in range(1, len(string)):
    odd = getLongestPalindromeFrom(string, i - 1, i + 1)
    even = getLongestPalindromeFrom(string, i - 1, i)
    longest = max(odd, even, key=lambda x: x[1] - x[0])
    currentLongest = max(longest, currentLongest, key=lambda x: x[1] - x[0])
  return string[currentLongest[0] : currentLongest[1]]

def getLongestPalindromeFrom(string, leftIdx, rightIdx):
  while leftIdx >= 0 and rightIdx < len(string):
    if string[leftIdx] != string[rightIdx]:
      break
    leftIdx -= 1
    rightIdx += 1
  return [leftIdx + 1, rightIdx]
```
