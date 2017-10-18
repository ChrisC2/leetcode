/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var averageOfLevels = function(root) {
    var queue = [root];
    var result = [];

    while(queue.length) {
        var n = queue.length;
        var sum = 0;

        for(var i = 0; i < n; i++) {
            var node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            sum += node.val;
        }
        result.push(sum / n);
    }
    return result;
};