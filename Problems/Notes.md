# Notes

## Array
Definition: Container object that holds a fixed number (except in JS) of values of a single type.

- indexed, so it can be accessed quickly
- operations:
  - traverse
  - search (by index or element)
  - sort
  - update
  - insert
  - delete

## Linked List
Definition: Linear data structure where each element is a separate object.

- nodes linked together using pointers
  - key = value
  - next = pointer
  - head = start
  - tail = end
- need to traverse sequentially to access
- operations:
  - traverse
  - searh
  - insert
  - remove
- types:
  - singly linked
  - doubly linked - pointers in both directions
  - circularly linked - tail points to head and visa versa

## Stack
Definition: LIFO, last in first out data structure or FILO, first in last out

- example: stack of plates, the last plate you added (the one on top) is the first one you will remove
- operations:
  - push: adding/inserting to the top of the stack
  - pop: deleting and returning whatever's on top of the stack
  - peek: returning what's at the top of the stack without deleting it, check if empty, check if full
- use: implement function calls in recursive programming

## Queue
Definition: FIFO, first in first out

- operations:
  - enqueue: inserting an element at the end of a queue
  - dequeue: removing an element from the beginning of a queue
- use: used to implement priority queues

## Hash Table
Definition: data structure that stores values in key/value pairs (think of a relational database)

- direct addressing - 1 key per value, can get inefficient
  - use hash tables to address this issue
- hash functions - map a data set of any size to a fixed size
- collision - when 2 keys are hashed to same index in hash table
  - problem because each slot in hash table supposed to store a single element
  - solutions:
    - chaining - make hash table an array of linked lists (each index has its own linked list)
- applications: databases, associative arrays, set data structure

## Tree
Definition: data structure where data is organized heirarchically and are linked together (similar to linked list, but LLs are linear, whereas trees are heirarchical)

types: binear search, B tree, treap, read-black, splay, AVL, n-ary

- binary search tree:
  - stores data in a sorted order
  - 4 attributes: key, right, left, p (parent pointer)
  - every node on right subtree needs to be larger than current node, every node on the left subtree needs to be smaller
  - used when data is constantly entering and leaving

## Graph
Definition: finite set of vertices or nodes and a set of edges connecting those vertices

- order: number of vertices
- size: number of edges
- types: directed, undirected
- example: social network, GPS
