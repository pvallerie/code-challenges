# Bubble Sort
Write a funciton that takes in an array of integers and rturns a sorted version of that array. Use the Bubble Sort algorithm to sort the array.

## Attempt
```py
def bubbleSort(array):
  # iterate through array
  for num in range(len(array) - 1):
    for number in range(len(array) - 1):
      # compare current number to the next number
      if array[number] > array[number + 1]:
        # if current number is > next number, swap them
        array[number], array[number + 1] = array[number + 1], array[number]
    # return the now sorted array
    return array

array = [8, 5, 2, 9, 5, 6, 3]
bubbleSort(array)
```

## Solution
```py
def bubbleSort(array):
    isSorted = False
    counter = 0
    while not isSorted:
        isSorted = True
        for i in range(len(array) - 1 - counter):
            if array[i] > array[i + 1]:
                swap(i, i + 1, array)
                isSorted = False
        counter += 1
    return array

def swap(i, j, array):
    array[i], array[j] = array[j], array[i]
```
