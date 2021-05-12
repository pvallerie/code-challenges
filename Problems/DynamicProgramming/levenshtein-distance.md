# Levenshtein Distance
Write a function that takes in two strings and returns the minimum number of edit operations that need to be performed on the first string to obtain the second string.

There are three edit operations: insertion of a character, deletion of a character and substitution of a character for another.

## Attempt
```js
function levenshteinDistance(str1, str2) {
    // array representing overall 2D array (matrix)
    const matrix = new Array()
    
    // iterate backwards through str2 adding all substrings to matrix
    for (let i = str2.length; i >= 0; i--) {
        // slice from beginning of str2 to current index
        const subStr = str2.slice(0, i)
        // add as sub array to matrix
        matrix.unshift(subStr)
    }

    console.log(matrix)
}

const str1 = 'pete'
const str2 = 'lilly'
levenshteinDistance(str1, str2)
```

## Solution
```js
function levenshteinDistance(str1, str2) {
    const edits = [];
    for (let i = 0; i < str2.length + 1; i++) {
        const row = [];
        for (let j = 0; j < str1.length + 1; j++) {
            row.push(j);
        }
        row[0] = i;
        edits.push(row);
    }
    for (let i = 1; i < str2.length + 1; i++) {
        for (let j = 1; j < str1.length + 1; j++) {
            if (str2[i - 1] === str1[j - 1]) {
                edits[i][j] = edits[i - 1][j - 1];
            } else {
                edits[i][j] = 1 + Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1]);
            }
        }
    }
    return edits[str2.length][str1.length];
}
```