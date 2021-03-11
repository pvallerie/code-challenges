# Best Time to Buy and Sell Stock II

## Attempt
```py
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
#         buy variable
        buy = 0
#         profits list
        profits = []

#         iterate through prices list
        for i in range(len(prices) - 1):
#             check if we have bought yet
            if buy == 0:
#                 if we haven't
#                 check if current price is lower than next price
                if prices[i] < prices[i + 1]:
#                     if it is
#                     buy it
                    buy = prices[i]
#             if we have bought already
#             check if buy is larger than current price
            elif prices[i] > buy:
#                 if it is, check if next price is higher
                if prices[i] < prices[i + 1]:
#                     if it is, continue
                    continue
#                 if it is not, sell and set buy to 0
                profits.append(prices[i] - buy)
                buy = 0

        if prices[-1] > buy:
            profits.append(prices[-1] - buy)

        return sum(profits)
        ```

## Solution
```py
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # accumulator
        stonks = 0

        # loop through prices
        for i in range(len(prices) - 1):
            # if current price is less than next price
            if prices[i] < prices[i + 1]:
                # add difference to the accumulator
                stonks += (prices[i + 1] - prices[i])

        # return accumulator
        return stonks
```
