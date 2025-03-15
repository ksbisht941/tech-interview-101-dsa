const { LinkedList, Node } = require('./setup');

// With Iterator
// function traverseLinkedList(head) {
//     const result = [];
//     let temp = head;

//     while (temp != null) {
//         result.push(temp.value);
//         temp = temp.next;
//     }

//     return result;
// }

// With Recursion
function traverseLinkedList(head) {
    const result = [];
    rPrint(head, result);
    return result;
}

function rPrint(head, result) {
    if (head == null) return;
    result.push(head.value);
    rPrint(head.next, result);
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print();

const result = traverseLinkedList(list.head);
console.log(result);
