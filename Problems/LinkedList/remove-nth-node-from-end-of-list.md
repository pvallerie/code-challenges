# Remove Nth Node From End of List
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass?

## Attempt
```py
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
#         counter
        counter = 0

#         current pointer and delayed pointer
        curPointer = head
        delayedPointer = head

#         use while loop to find the last node
        while curPointer.next != None:
#             move to the next node
            curPointer = curPointer.next
            delayedPointer = delayedPointer.next
#             when counter reaches n
            if counter == n - 1:
#                 set delayedPointer to head
                delayedPointer = head

#         once we reach last pointer, delete node that delayedPointer is pointing to
        delayedPointer.val = delayedPointer.next.val
        delayedPointer.next = delayedPointer.next.next

        return head
```

## Solution
```py
def removeNthFromEnd(self, head, n):
    dummy = ListNode(0)
    dummy.next = head
    fast = slow = dummy
    for _ in xrange(n):
        fast = fast.next
    while fast and fast.next:
        fast = fast.next
        slow = slow.next
    slow.next = slow.next.next
    return dummy.next
```
