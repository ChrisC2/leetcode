/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    var node = root;
    if(!node) return 0;
    var leftHeight = maxDepth(node.left);
    var rightHeight = maxDepth(node.right);
    return Math.max(leftHeight + 1, rightHeight + 1);
};