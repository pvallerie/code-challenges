# Search Insert Position

## Attempt
```js
var searchInsert = function(nums, target) {
//     iterate through nums
    for (let i = 0; i < nums.length; i++) {
//         if currentNum < target
        if (nums[i] < target) {
//             go to next num
            continue
        } else if (nums[i] >= target) {
//             return index of currentNum
            return i
        }
    }
    return nums.length
};
```

```js
const searchInsert = (nums, target) => {
    let left = 0
    let right = nums.length - 1

    while (done !== 2) {
        // check if target is less than value at middle of nums
    }
}
```

## Solution
```js
function searchInsert (nums, target) {
  if (nums.indexOf(target) !== -1) {
      return nums.indexOf(target)
  } else {
      nums.push(target)
      nums.sort((a, b) => a - b)
      return nums.indexOf(target)
  }
}
```

```js
var searchInsert = function(nums, target) {
    let i = 0
    while(nums[i] < target) i += 1
    return i
};
```