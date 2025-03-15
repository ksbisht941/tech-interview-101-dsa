const { LinkedList, Node } = require('./setup');

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
