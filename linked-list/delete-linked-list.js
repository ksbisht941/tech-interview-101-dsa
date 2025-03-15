const { LinkedList, Node } = require('./setup');

// First Node
// function deleteLinkedList(list) {
//     let temp = list.head;

//     if (temp == null) {
//         return null;
//     } else {
//         list.head = temp.next;
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

const list = new LinkedList();
list.append(10);
list.append(30);
list.append(50);
list.append(70);
list.print();


deleteLinkedList(list);
list.print();
