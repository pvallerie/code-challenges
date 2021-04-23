# Class Photos

## Attempt
```js
const pictureDay = (redShirts, blueShirts) => {
    // sort both rows in descending order and compare last element in each
    const sortedRed = redShirts.sort((a, b) => b - a)
    const sortedBlue = blueShirts.sort((a, b) => b - a)

    // the row with higher last element is the back
    const backRow = (sortedRed[0] > sortedBlue[0]) ? sortedRed : sortedBlue
    const frontRow = (sortedRed[0] < sortedBlue[0]) ? sortedRed : sortedBlue

    // loop through back row and compare current value to corresponding value in other row
    for (let i = 0; i < backRow.length; i++) {
        // if any of current vals in back row are smaller than current val in front row
        if (backRow[i] <= frontRow[i]) {
            return false
        } 
    }
    
    return true
        
}

const redShirtHeights = [5, 8, 1, 3, 4]
const blueShirtHeights = [6, 7, 2, 4, 5]
pictureDay(redShirtHeights, blueShirtHeights)
```

## Solution
```js
attempt accepted
```