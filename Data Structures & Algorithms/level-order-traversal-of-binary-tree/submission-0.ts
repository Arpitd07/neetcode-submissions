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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        const result:number[][] = [];
        const queue = [root];
        if(root === null){
            return []
        }
        while (queue.length > 0) {
            let len = queue.length;
            const level:number[] = [];
            for (let i = 0; i < len; i++) {
                const node = queue.shift()!;
                level.push(node.val);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            result.push(level)
        }
        return result
    }
}
