const { LinkedList, Node } = require('./setup');

function insertLinkedList(list, pos, value) {
    const node = new Node(value);
    let temp = list.head;

    let idx = 1;
    while (idx < pos - 2) {
        temp = temp.next;
        idx++;
    }

    const nextNode = temp.next;
    temp.next = new Node(value);
    temp.next.next = nextNode;
}

const list = new LinkedList();
list.append(10);
list.append(30);
list.append(50);
list.append(70);
list.print();

insertLinkedList(list, 2, 5);
list.print();
