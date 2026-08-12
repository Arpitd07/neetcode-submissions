/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left:TreeNode | null = null, right:TreeNode | null = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root: TreeNode | null): string {
        const result: string[] = []
        function traverse(node: TreeNode | null) {
            if (!node) {
                result.push("null")
                return
            }
            result.push(node.val.toString())
            traverse(node.left)
            traverse(node.right)
        }
        traverse(root)
        return result.join(",")
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data: string): TreeNode {
        const items = data.split(',')
        let i = 0
        function build(): TreeNode | null {
            const item = items[i]
            i++
            if (item === 'null') {
                return null
            }
            const root = new TreeNode(parseInt(item, 10));
            root.left = build()
            root.right = build()
            return root
        }
        return build()
    }
}
