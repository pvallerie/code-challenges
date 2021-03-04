# Generate Document
You're given a string of available characters and a string representing a document that you need to generate. Write a function that determines if you can generate the document using the available characters. If you can generate the document, your function should return `true`; otherwise, it should return `false`.

You're only able to generate the document if the frequency of unique characters in the characters string is greater than or equal t othe frequency of unique characters in the document string. For example, if you're given `characters = "abcabc"` and `document = "aabbccc"` you cannot generate the document because you're missing one `c`.

The document that you need to crate may containt any characters, including special characters, capital letters, numbers, and spaces.

Note: you can always generate the empty string(`""`).
## Attempt
```py
def generateDocument(characters, document):
  # iterate throught document
  for letter in document:
    # for each letter in the document, iterate through characters string to see if there's a match
    for ltr in characters:
      # if there is a match, pop it out of the characters string
      if letter == ltr:
        removeLetterFromString(characters, characters.index[ltr])
      # if there is no match, return `False`
      else:
        return False
  # if we get to the end of the document string, return `True`
  return True

def removeLetterFromString(string, letterIndex):
  resetString = string[:letterIndex - 1] + [letterIndex]
  characters = resetString


characters = "Bste!hetsi ogEAxpelrt x "
document = "AlgoExpert is the Best!"

generateDocument(characters, document)
```


## Solution
```py
# O(n + m) time | O(c) space - where n is the number of characters, m is the length of the document, and c is the number of unique characters in the characters string
def generateDocument(characters, document):
  # create hash table to store characters and their count
  characterCounts = {}

  # loop through characters string to count each character
  for character in characters:
    # if that character is not in the hash table, add it to the hash table
    if character not in characterCounts:
      characterCounts[character] = 0

    # increment the count of the character in the hash table
    characterCounts[character] += 1

  # loop through characters in document
  for character in document:
    # if character is not in the document, or if there are zero of them left, return False
    if character not in characterCounts or characterCounts[character] == 0:
      return False

    # otherwise de-increment the count of that character in the hash table by 1
    characterCounts[character] -= 1

  return True
```
