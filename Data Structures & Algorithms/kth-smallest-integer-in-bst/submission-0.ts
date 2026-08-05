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
        function inOrder(node: TreeNode | null, result: number[]): number[]{
            if(node === null) return result
            inOrder(node.left, result)
            result.push(node.val)
            inOrder(node.right, result)
            return result
        }
        const result = inOrder(root,[])
        return result[k-1]
    }
}
