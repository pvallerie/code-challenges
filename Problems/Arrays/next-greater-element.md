# Next Greater Element
Write a function that takes in an array of integers and returns a new array containing, at each index, the next element in the input array that's greater than the element at the index in the input array.

In other words, your function should return a new array where `outputArray[i]` is the next element in the input array that's greater than `inputArray[i]`. If there's no such next greater element for a particular index, the value at the index in the output array should be `-1`. For example, given `array = [1, 2]`, your function should return `[2, -1]`.

Additionally, your function should treat the input array as a circular array. A circular array wraps around itslef as if it were connected end-to-end. So the next index after the last index in a circular array is the first index. This means that, for our problem, given `array = [0, 0, 5, 0, 0, 3, 0, 0]`, the next greater element after `3` is `5`, since the array is circular.

## Attempt
```js
const nextGreaterElement = array => {
    // output array
    const output = []

    // sorted input array
    const sortedArray = array.sort((a,b) => a - b)

    // iterate through input array
    for (let num of array) {
        // iterate through sortedArray
        for (let j = 0; j < sortedArray.length - 1; j++) {
            console.log(output)
            // if i < j
            if (num < sortedArray[j]) {
                // add j to output
                output.push(sortedArray[j])
                // slice out j
                sortedArray.slice(j)
                // break
                break
            }
            // if we're at last element in sorted array and i<j
            if (j === sortedArray.length - 1 && num < sortedArray[j]) {
                // add -1 to output
                output.push(-1)
            }
        }
        console.log('-------')
    }
    return output
}

const array = [2, 5, -3, -4, 6, 7, 2]
nextGreaterElement(array)
```

## Solution
```js
const nextGreaterElement = array => {
    // fill output array with -1s
    const result = new Array(array.length).fill(-1)
    // create array for stack
    const stack = []

    // loop through input array twice (circular)
    for (let i = 0; i < 2 * array.length; i++) {
        // set circular index as mod of length of input array
        const circularIdx = i % array.length

        // while length of stack isn't 0 and 
        while (stack.length > 0 && array[stack[stack.length - 1]] < array[circularIdx]) {
            const top = stack.pop()
            result[top] = array[circularIdx]
        }

        stack.push(circularIdx)
    }

    return result
}
```