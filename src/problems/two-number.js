export class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
export function addTwoNumbers(l1, l2) {
    const arrNode = new Array();
    let remainder = 0;
    while (true) {
        if (l1 === null && l2 === null) {
            break;
        }
        const l2Val = l2?.val ?? 0;
        const l1Val = l1?.val ?? 0;
        const currentVal = l1Val + l2Val + remainder;
        remainder = 0;
        const currentValStr = currentVal.toString();
        const val = currentValStr.split("");
        if (val.length > 1) {
            remainder += parseInt(val[0]);
            arrNode.push(new ListNode(parseInt(val[1])));
        }
        else {
            arrNode.push(new ListNode(currentVal));
        }
        if (l1?.next) {
            l1 = l1.next;
        }
        else {
            l1 = null;
        }
        if (l2?.next) {
            l2 = l2.next;
        }
        else {
            l2 = null;
        }
    }
    const result = arrNode[0];
    let current = result;
    for (let i = 1; i < arrNode.length; i++) {
        if (!current?.next) {
            current.next = arrNode[i];
            current = current.next;
        }
    }
    return result;
}
;
//# sourceMappingURL=two-number.js.map