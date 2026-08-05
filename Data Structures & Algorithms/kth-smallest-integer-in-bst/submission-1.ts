/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        let count = 0
        let answer: number | null = null
        function inOrder(node: TreeNode | null): number[]{
            if(node === null || answer !== null) return
            inOrder(node.left)
            count++
            if(count === k){
                answer = node.val
            }
            inOrder(node.right)
        }
        inOrder(root)
        return answer
    }
}
