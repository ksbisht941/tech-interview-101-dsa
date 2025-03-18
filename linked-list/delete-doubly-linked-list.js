const { DoublyLinkedList, Node } = require('./setup');

// First Node
// function deleteLinkedList(list) {
//     let temp = list.head;

//     if (temp == null) {
//         return null;
//     } else {
//         list.head = temp.next;
//         list.head.prev = null;
//     }
// }

// Last Node
function deleteLinkedList(list) {
    let temp = list.head;

    if (temp == null || temp.next == null) return null;

    while (temp.next.next !== null) {
        temp = temp.next;
    }

    temp.next = null;
}

const list = new DoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.printForward();

deleteLinkedList(list);

list.printForward();
