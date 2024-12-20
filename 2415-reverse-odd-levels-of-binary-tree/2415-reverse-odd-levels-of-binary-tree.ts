/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    const queue: (TreeNode | null)[] = [root]; 
    let depth = 0; 

    while (queue.length !== 0) {
        const levelSize = queue.length; 
        const currentLevelNodes: TreeNode[] = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (node) {
                if (depth % 2 === 1) {
                    currentLevelNodes.push(node);
                }

                // Enqueue child nodes for the next level.
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }

        if (depth % 2 === 1) {
            const middleIndex = currentLevelNodes.length >> 1;
            for (let i = 0; i < middleIndex; i++) {
                const mirrorIndex = currentLevelNodes.length - 1 - i;
                [currentLevelNodes[i].val, currentLevelNodes[mirrorIndex].val] = [currentLevelNodes[mirrorIndex].val, currentLevelNodes[i].val];
            }
        }

        depth++;
    }

    return root;
}

