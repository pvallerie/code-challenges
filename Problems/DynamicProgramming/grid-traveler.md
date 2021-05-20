# Grid Traveler
Find number of ways to travel from top left of grid to bottom right given dimensions of grid as inputs.

## Brute Force Recursion
Works fine for smaller grids, but larger grids will be really inefficient to compute for.
```js
const gridTravler = (m, n) => {
    // base cases
    // 1x1 grid has one path
    if (m === 1 && n === 1) return 1
    // grid with 0 height or width has no paths
    if (m === 0 || n ===0) return 0

    // recursion
    // call once going right one
    // plus
    // call once going down one
    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
}
```

## Memoized Recursion
```js
const gridTraveler = (m, n, memo = {}) => {
    // set key
    const key = m + ',' + n

    // check for stored value in memo
    if (key in memo) return memo[key]

    // base cases (same as above)
    if (m === 1 && n === 1) return 1
    if (m === 0 || n === 0) return 0

    // recursion
    // store recursion in memo at key
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
    return memo[key]
}
```