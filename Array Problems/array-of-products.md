# Array of Products
Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product fo every other number in the input array.
In other words, the value at `output[i]` is equal to the product of ever number inthe input array other than `input[i]`.
Note that you're expected to solve this problem without using division.

## Attempt
```py
def arrayOfProducts(arr):
  # define accumulator
  output = []
  # iterate through arr
  for num in arr:
    # define total accumulator
    total = 1
    # iterate through arr
    for i in arr:
      # if num == i, skip it
      if num != i:
        total = total * i
    output.append(total)

  return output

array = [5, 1, 4, 2]
arrayOfProducts(array)
```

## Solution
```py
# O(n) tim | O(n) space - where n is the length of the input array
def arrayOfProducts(array):
  products = [1 for _ in range(len(array))]

  leftRunningProduct = 1
  for i in range(len(array)):
    products[i] = leftRunningProduct
    leftRunningProduct *= array[i]

  rightRunningProduct = 1
  for i in reversed(range(len(array))):
    products[i] *= rightRunningProduct
    rightRunningProduct *= array[i]

  return products
```
![arrayOfProducts solution](/Users/petervallerie/sei/code-challenges/public/ArrayOfProductsSS.png)
[Article explaining solution](https://dev.to/akhilpokle/product-of-array-except-self-a-mind-boggling-google-interview-question-1en1)
