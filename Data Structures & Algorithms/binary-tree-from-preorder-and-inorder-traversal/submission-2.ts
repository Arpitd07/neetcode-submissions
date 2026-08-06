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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode {
const inorderIndexMap = new Map<number, number>();
    for (let i = 0; i < inorder.length; i++) {
        inorderIndexMap.set(inorder[i], i);
    }

    let preorderIndex = 0;

    function arrayToTree(inorderStart: number, inorderEnd: number): TreeNode | null {
        if (inorderStart > inorderEnd) {
            return null;
        }

        // Pick current root from preorder traversal using preorderIndex
        const rootVal = preorder[preorderIndex++];
        const root = new TreeNode(rootVal);

        // O(1) lookup to find the root's position in inorder array
        const rootInorderIndex = inorderIndexMap.get(rootVal)!;

        // Recursively build left and right subtrees within index boundaries
        root.left = arrayToTree(inorderStart, rootInorderIndex - 1);
        root.right = arrayToTree(rootInorderIndex + 1, inorderEnd);

        return root;
    }

    return arrayToTree(0, inorder.length - 1);
    }
}
