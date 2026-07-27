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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        const dummy = new ListNode(0)
        let tail = dummy
        while (list1 && list2) {
            if (list1.val <= list2.val) {
                tail.next = list1
                tail = list1
                list1 = list1.next
            }
            else {
                tail.next = list2
                tail = list2
                list2 = list2.next
            }
        }
        if(list1){
            tail.next = list1
        }
        else{
            tail.next = list2
        }
        return dummy.next
    }
}
