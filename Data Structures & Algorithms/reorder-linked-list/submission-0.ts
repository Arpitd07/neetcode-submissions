/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        let slow = head
        let fast = head
        //Spliting using slow and fast at mid
        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
        }
        let l2 = slow!.next
        slow.next = null

        //Reversing the 2nd list
        let prev: ListNode | null = null
        let curr: ListNode | null = l2

        while (curr !== null) {
            const next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        l2 = prev
        
        //Merge the lists
        let first = head
        let second = l2

        while(second !== null){
            const firstNext = first!.next
            const secondNext = second!.next

            first!.next = second
            second.next = firstNext

            first = firstNext
            second = secondNext
        }
    }
}
