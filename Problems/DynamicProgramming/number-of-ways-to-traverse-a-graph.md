# Number of Ways to Traverse a Graph
You're given two positive intergers representing the width and height of a grid-shaped, rectangular graph. Write a function that returns the number of ways to reach the bottom right corner of the graph when starting at the top left corner. Each Move you take must either go down or right. In other words, you can never move up or left in the graph.

For example, given the graph illustrated below, with `width = 2` and `height = 3`, there are three ways to reach the bottom right corner when starting at the top left corner:

```
 _ _
|_|_|
|_|_|
|_|_|
```
1. Down, Down, Right
2. Right, Down, Down
3. Down, Right, Down

Note: you may assume that `width + height >= 2`. In other words, the graph will never be a 1x1 grid.

## Attempt
```js
const numberOfWaysToTraverseGraph = (width, height) => {
    // base case
    if (width === 1 || height === 1) {
        return 1
    }

    // recursion
    return (numberOfWaysToTraverseGraph(width - 1, height) + numberOfWaysToTraverseGraph(width, height - 1))
}

const width = 4
const height = 3
numberOfWaysToTraverseGraph(width, height) 
```

## Solution
```js
// dynamic programing
const numberOfWaysToTraverseGraph = (width, height) => {
    const numberOfWays = []

    for (let i = 0; i < height + 1; i++) {
        numberOfWays.push([])
        for (let j = 0; j < width + 1; j++) {
            numberOfWays[i].push(0)
        }
    }
}
```