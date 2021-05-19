# Climbing Stairs
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

## Attempt
```py
class Solution:
    def climbStairs(self, n: int) -> int:
#         accumulator
        ways = [[2, 2], [2, 1, 1], ]

#         check if even
        if n % 2 == 0:
#             will have a solution of all 1s and a solution of all 2s
```

```js
var climbStairs = function(n) {
//     hash table to store combos
    const combos = {n: 1}
    n--
    
    while (n > 0) {
        combos[n] = combos[n] + 1
        n--
        console.log(combos)
    }
    
    return combos[n]
};
```

## Solution
```py
def climbStairs(self, n):
    a, b = 1, 1
    for i in range(n):
        a, b = b, a + b
    return a
```

memoization
```js
let climbStairs = function(n) {
    let arr={};
    arr[1]=1;
    arr[2]=2;
    for(let i=3;i<=n;i++){
        arr[i]=arr[i-1]+arr[i-2];
    }
    console.log(arr)
    return arr[n];
};
```
