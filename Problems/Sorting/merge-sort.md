# Merge Sort

```js
// recursive
const merge = (left, right) => {
    let arr = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    return [ ...arr, ...left, ...right]
}

const mergeSort = array => {
    const half = array.length / 2

    // base case
    if (array.length < 2) {
        return array
    }

    // recursion
    const left = array.splice(0, half)
    return merge(mergeSort(left), mergeSort(array))
}

const array = [4, 5, 6, 3, 2, 3, 6, 9]
mergeSort(array)
```