# Delete Node in a Linked List
Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.

## Attempt
```py
def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        """
#         change `node.val` to the val of the next node
        node.val = node.next.val
#         change `node.next` to be the next of the next node
        node.next = node.next.next
```

## Solution
```py
def deleteNode(self, node):
    # change `node.val` to the val of the next node
    node.val = node.next.val
    # change `node.next` to be the next of the next node
    node.next = node.next.next
```
