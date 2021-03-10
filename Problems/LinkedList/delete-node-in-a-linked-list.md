# Delete Node in a Linked List
Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.

## Attempt
```py
class Solution:
    def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        """
#         iterate through self(linked list)
        for i in range(len(self) - 1):
#             find the node whose tail is node to be deleted
            if self[i].next == node:
#                 change tail of current node to the tail of the next node's tail
                self[i].next = self[i + 1].next
```

## Solution
```py
def deleteNode(self, node):
    node.val = node.next.val
    node.next = node.next.next
```
