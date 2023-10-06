function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    const node = new ListNode();
    const carry = arguments[2];

    if (l1 || l2) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const next1 = l1? l1.next : null;
        const next2 = l2? l2.next : null;
        const sum = carry ? val1 + val2 + 1 : val1 + val2;
        node.val = (sum % 10);
        addTwoNumbers(next1, next2, node.val >= 10);  
    } else if (carry) {
      node = new ListNode(1);
      node.next = null;
    }
    return node;
};
addTwoNumbers([2,4,3], [5,6,4]);