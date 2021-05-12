


```js
const checkForDuplicates = (arr1, arr2) => {
    // map to store elements of arr1 for quick checking
    let map = {};

    // loop through arr1 to add elements to map
    for (let i=0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }

    // loop through arr2, checking if elements exist in our map
    for (let j=0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }

    // return false if we make it through 2nd loop without returning
    return false
}

const arr1 = [1, 2, 3, 4]
const arr2 = [8, 7, 6, 5, 4]
checkForDuplicates(arr1, arr2)
```

```js
// more readable option
const checkForDuplicates = (arr1, arr2) => {
    return arr1.some(item => arr2.include(item))
}

const arr1 = [1, 2, 3, 4]
const arr2 = [8, 7, 6, 5, 4]
checkForDuplicates(arr1, arr2)
```