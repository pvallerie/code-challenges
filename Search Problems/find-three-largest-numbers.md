# Find Three Largest Numbers

Write a function that takes in an array of at least three integers and, without sorting the input array, returns a sorted array of the three largest integers in the input array. The function should return duplicate integers if necessary; for example, it should return [10, 10, 12] for an input array of [10, 5, 9, 10, 12]

## Attempt
```py
def findThreeLargestNumbers(arr):
    # define accumulator array
    output = []
    # sort through the array starting with first integer
    for i in range(len(arr)):
        # compare i to each of the following integers
        for j in range(i + 1, len(arr) - 1):
            if i >= j:
                # add larger integer to output array
                output.append(i)
            else:
                output.append(j)
    # return array of 3 largest integers in the array
    return output

sampleArr = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]

findThreeLargestNumbers(sampleArr)
```

## Solution
![findThreeLargestNumbers solution](/Users/petervallerie/sei/code-challenges/public/FindThreeLargestNumbersSS.png)
