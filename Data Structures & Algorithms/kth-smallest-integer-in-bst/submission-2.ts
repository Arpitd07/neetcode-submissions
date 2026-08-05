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
    index: number = 0
    kthSmallest(root: TreeNode | null, k: number): number {
        let res: number[] = []
        let traversal = function (root: TreeNode | null, res:number[]){
            if(root === null) return
            traversal(root.left, res)
            res.push(root.val)
            traversal(root.right, res)
        }
        traversal(root, res)
        return res[k-1]
    }
}
