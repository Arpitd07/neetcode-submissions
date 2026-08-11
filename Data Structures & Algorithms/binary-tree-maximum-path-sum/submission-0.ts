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
     * @return {number}
     */
    maxPathSum(root: TreeNode | null): number {
        let maxSum = -Infinity
        function maxGain(node: TreeNode | null): number {
            if(node === null){
                return 0
            }
            const leftGain = Math.max(0, maxGain(node.left))
            const rightGain = Math.max(0, maxGain(node.right))
            const currPath = leftGain + node.val + rightGain
            maxSum = Math.max(maxSum, currPath)
            return node.val + Math.max(leftGain, rightGain)
        }
        maxGain(root)
        return maxSum
    }
}
