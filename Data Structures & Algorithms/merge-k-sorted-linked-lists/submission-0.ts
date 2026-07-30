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
     * @param {ListNode[]} lists
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
        if (list1) {
            tail.next = list1
        }
        else {
            tail.next = list2
        }
        return dummy.next
    }
    mergeKLists(lists: ListNode[]): ListNode {
        if(lists.length === 0){
            return null
        }
        while (lists.length > 1) {
            const nextRound = []
            for (let i = 0; i < lists.length; i += 2) {
                if (i + 1 < lists.length) {
                    nextRound.push(lists[i] = this.mergeTwoLists(lists[i], lists[i + 1]))
                }
                else {
                    nextRound.push(lists[i])
                }
            }
            lists = nextRound
        }
        return lists[0]
    }
}
