/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
         let remainder = 0 
   let dummy = new ListNode()  // starting point
   let current = dummy  
    while(l1 || l2 || remainder){
       let value = (l1 ? l1.val: 0 ) + (l2 ? l2.val: 0) + remainder
       remainder = 0
       if(value >= 10){
        value -= 10
        remainder = 1
        current.next = new ListNode(value)  // first real node
        current = current.next
        value = 0
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
       }else{
        current.next = new ListNode(value)  // first real node
        current = current.next
        value = 0
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
       }
    }
    return dummy.next
    }
}
