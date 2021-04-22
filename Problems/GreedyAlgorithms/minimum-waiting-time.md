# Minimum Waiting Time


## Attempt
```js
const minWaitTime = queries => {
    // sort input array so quickest queries run first
    queries = queries.sort((a, b) => a - b)
    let totalQueryTime = 0

    // iterate through input array of queries
    for (let i = 0; i < queries.length; i++) {
        const duration = queries[i]
        const queriesLeft = queries.length - (i + 1)
        totalQueryTime += duration * queriesLeft
    }

    return totalQueryTime
}

const queries = [3, 2, 1, 2, 6]
minWaitTime(queries)
```

## Solution
```js
const minWaitTime = queries => {
    // sort input array so quickest queries run first
    queries = queries.sort((a, b) => a - b)
    // accumulator
    let totalQueryTime = 0

    // iterate through input array of queries
    for (let i = 0; i < queries.length; i++) {
        // keep track of duration (value at current index)
        const duration = queries[i]
        // keep track of how many queries we have left to run
        const queriesLeft = queries.length - (i + 1)
        // updating accumulator with duration of current query 
        // times the number of queries left to run that have to wait for this query to finish
        totalQueryTime += duration * queriesLeft
    }

    return totalQueryTime
}

const queries = [3, 2, 1, 2, 6]
minWaitTime(queries)
```