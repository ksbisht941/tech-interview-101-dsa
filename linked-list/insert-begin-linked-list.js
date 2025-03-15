const { LinkedList, Node } = require('./setup');

function insertLinkedList(list, value) {
    const node = new Node(value);
    node.next = list.head;
    list.head = node;
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print();

insertLinkedList(list, 5);
list.print();
