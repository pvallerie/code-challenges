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

## Solution
```py
def climbStairs(self, n):
    a, b = 1, 1
    for i in range(n):
        a, b = b, a + b
    return a
```
