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

function maxLevelSum(root: TreeNode | null): number {
            const queue: TreeNode[] = [root!];
  
    let resultLevel: number = 1;
  
    let maxSum: number = -Infinity;
  
    let currentLevel: number = 1;
  
    while (queue.length > 0) {
        const nodesAtCurrentLevel: number = queue.length;
      
        let currentLevelSum: number = 0;
      
        for (let i = 0; i < nodesAtCurrentLevel; i++) {
            const currentNode: TreeNode = queue.shift()!;
          
            currentLevelSum += currentNode.val;
          
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
      
        if (currentLevelSum > maxSum) {
            maxSum = currentLevelSum;
            resultLevel = currentLevel;
        }
      
        currentLevel++;
    }
  
    return resultLevel;
};