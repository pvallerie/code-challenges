Given two strings, find their largest common substring. 

Ex: str1 = 'racecar', str2 = 'ace'
    output = 'ace'

## Attempt
```js
const largestCommonSubstring = (str1, str2) => {
    // accumulator string for sub string
    let largestSharedSubstring = ''
    let currentSubstring = ''

    // loop through first string
    for (let i = 0; i < str1.length; i++) {
        console.log('letter: ', str1[i])
        // loop through second string
        for (let j = 0; j < str2.length; j++) {
            // if current letter in str1 === current letter in str2
            if (str1[i] === str2[j]) {
                // add it to outputStr
                currentSubstring += str1[i]
                break
            } 
            console.log('cursub: ', currentSubstring, 'pair: ', str1[i], str2[j])
        }
        if (currentSubstring > largestSharedSubstring) {
            // set largestSharedSubstring equal to currentSubstring
            largestSharedSubstring = currentSubstring
            currentSubstring = ''
    }
    }
    console.log('output: ', largestSharedSubstring)
    return largestSharedSubstring
}
```

```js
const largestCommonSubstring = (str1, str2) => {
    // accumulators
    let largestSharedSubstring = ''
    let currentSubString = ''

    // pointer for 2nd string loop
    let str2Idx = 0

    // loop through str1
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[str2Idx]) {
            // reset str2Idx
            str2Idx = 0
            // if currentSubString is larger than largestSharedSubstring
            if (currentSubString > largestSharedSubstring) {
                // set largestSharedSubstring to currentSubString
                largestSharedSubstring = currentSubString
                // reset currentSubString to blank
                currentSubString = ''
            }
        }
        
        // loop through str2
        while (str2Idx < str2.length) {
            console.log('pair: ', str1[i], str2[str2Idx])
            // if current characters match
            if (str1[i] === str2[str2Idx]) {
                currentSubString += str1[i]
                // move to next characters in both strings
                str2Idx++
                break
            }
            str2Idx++
        }

        
    }

    console.log('output: ', largestSharedSubstring)
    return largestSharedSubstring
}
```

## Solution
```java
public class LongestCommonSubstring {

    /**
     * Dynamic way of calculating lcs
     */
    public int longestCommonSubstring(char str1[], char str2[]){
        int T[][] = new int[str1.length+1][str2.length+1];
        
        int max = 0;
        for(int i=1; i <= str1.length; i++){
            for(int j=1; j <= str2.length; j++){
                if(str1[i-1] == str2[j-1]){
                    T[i][j] = T[i-1][j-1] +1;
                    if(max < T[i][j]){
                        max = T[i][j];
                    }
                }
            }
        }
        return max;
    }
```