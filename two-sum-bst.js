/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    var store = new Set();
    var queue = [root];

    while(queue.length) {
        var node = queue.shift();
        if(store.has(k - node.val)) return true;
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
        if(!store.has(node.val)) store.add(node.val);
    }
    return false;
};