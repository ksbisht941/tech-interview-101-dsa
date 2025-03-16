const { LinkedList, Node } = require('./setup');

// At start
// function insertLinkedList(list, value) {
//     const node = new Node(value);
//     node.next = list.head;
//     list.head = node;
// }

// At End
function insertLinkedList(list, value) {
    const node = new Node(value);
    let temp = list.head;

    while (temp.next != null) {
        temp = temp.next;
    }

    temp.next = node;
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print();

insertLinkedList(list, 5);
list.print();
