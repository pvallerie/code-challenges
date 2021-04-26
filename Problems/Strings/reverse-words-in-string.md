# Reverse Words in String

## Attempt
```js
const reverseWordsInString = string => {
    // reverse entire string
    const reversedString = []
    for (const l in string) {
            reversedString.unshift[string[l]]
        }

    // accumulator array to store letters of words
    const currentWord = []

    // loop through reversedString
        // if current value is not a whitespace
            // add current value to beginning of accumulator array
        // else if we hit a whitespace
            // join accumulator array into a word
            // insert that word to replace word we're iterating over
            // clear out the accumulator
}
```

## Solution
```js
function reverseWordsInString(string) {
  const words = []
  let startOfWord = 0
  for (let index = 0; index < string.length; index++) {
    const character = string[index]
    if (character === ' ') {
      words.push(string.slice(startOfWord, index))
      startOfWord = index
    } else if (string[startOfWord] === ' ') {
      words.push(' ')
      startOfWord = index
    }
  }
  words.push(string.slice(startOfWord))
  reverseList(words)
  return words.join('')
}
function reverseList(list) {
  let start = 0,
    end = list.length - 1
  while (start < end) {
    const temp = list[start]
    list[start] = list[end]
    list[end] = temp
    start++
    end--
  }
}
// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString;
```