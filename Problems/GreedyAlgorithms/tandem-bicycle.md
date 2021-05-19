# Tandem Bicycle

## Attempt
```js
const tandemBicycle = (redShirtSpeeds, blueShirtSpeeds, fastest) => {
    // sum accumulator
    let sum = 0

    // sort input arrays
    redShirtSpeeds.sort((a, b) => a - b)
    if (fastest === true) {
        blueShirtSpeeds.sort((a, b) => a - b).reverse()
    } else {
        blueShirtSpeeds.sort((a, b) => a - b)
    }

    // iterate through input arrays
    for (let i = 0; i < redShirtSpeeds.length; i++) {
        // add larger element at i of each input array to sum
        sum += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i])
    }

    // return sum of fastest riders in each pair
    return sum
}


const red = [5, 5, 3, 9, 2]
const blue = [3, 6, 7, 2, 1]
tandemBicycle(red, blue, true)
```

## Solution
```js

```