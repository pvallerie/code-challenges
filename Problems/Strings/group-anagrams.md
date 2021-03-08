# Group Anagrams
Write a function that takes in an array of strings and groups anagrams together.

Anagrams are strings made up of exactly the same letters, where order doesn't matter. For example, `"cinema"` and `"iceman"` are anagrams; similarly, `"foo"` and `"ofo"` are anagrams.

You function should return a list of anagram groups in no particular order.

## Attempt
```py
def groupAnagrams(array):
  groupedHash = {}
  # iterate through array
  for str in array:
    # sort each string by letter
    alphaOrderedStr = ''.join(sorted(str))
    # if alphaOrderedStr is not already a key in groupedHash
    if groupedHash[alphaOrderedStr]:
      # and store it in key/value pair with its original form in a hash table (store any other matching pairs in the same bucket)
      groupedHash[alphaOrderedStr].append(str)
      print(groupedHash)
    else:
      groupedHash[alphaOrderedStr] = str

  return groupedHash

words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
groupAnagrams(words)
```

## Solution
[LeetCode #49: Group Anagrams with JS](https://dev.to/johnkirtley_/leetcode-49-group-anagrams-with-javascript-28n)
```py
def groupAnagrams(words):
  anagrams = {}
  for word in words:
    sortedWord = "".join(sorted(word))
    if sortedWord in anagrams:
      anagrams[sortedWord].append(word)
    else:
      anagrams[sortedWord] = [word]
  return list(anagrams.values())
```
