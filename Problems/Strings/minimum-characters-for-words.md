# Minimum Characters for Words
Write a function that takes in an array of words and returns the smallest array of characters needed to form all of the words. The characters don't need to be in any particular order.

For example, the characters `["y", "r", "o", "u"]` are needed to form the words `["your", "you", "or", "yo"]`.

Note: the input words wno't contain any spaces; however, they might contain punctuation and/or special characters.
## Attempt
(attempt accepted)
```js
const minimumCharactersForWords = words => {
    // hash table to store max frequencies of each letter
    const maxFrequencies = new Map()

    // output array
    const output = []

    // iterate through words
    for (let word of words) {
        // hash table to store frequencies for each word
        const localMap = new Map()

        // iterate through chars in each word
        for (let char of word) {
            // tally each char
            if (localMap.has(char)) {
                localMap.set(char, localMap.get(char) + 1)
            } else {
                localMap.set(char, 1)
            }
        }

        // iterate through hash table
        for (let [key, value] of localMap) {
            // if key exists in maxFrequencies
            if (maxFrequencies.has(key)) {
                // if tally is greater than tally in maxFrequencies
                if (maxFrequencies.get(key) < value) {
                    // update tally in maxFreq to what tally is
                    maxFrequencies.set(key, value)
                }
            // else
            } else
                // add key/val pair to maxFrequencies
                maxFrequencies.set(key, value)
        }
    }

    // iterate through maxFrequencies
    for (let [key, value] of maxFrequencies) {
        // frequency tracker
        let freq = value

        // add key val times to output array
        while (freq > 0) {
            output.push(key)
            freq--
        }
    }

    return output
}

const words = ["this", "that", "did", "deed", "them!", "a"]
minimumCharactersForWords(words)
```

## Solution
```js

```