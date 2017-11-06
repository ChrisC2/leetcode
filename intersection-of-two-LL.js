/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var store = {};
    var nodeA = headA;
    while(nodeA) {
        if(!store[nodeA.val]) {
            store[nodeA.val] = true;
        }
        nodeA = nodeA.next;
    }
    var nodeB = headB;
    while(nodeB) {
        if(store[nodeB.val]) {
            return nodeB;
        }
        nodeB = nodeB.next;
    }
    return null;
};
