const { Node, DoublyLinkedList } = require('./setup');

// at Begin
// function insertDoublyLinkedList(list, n) {
//     const node = new Node(n);
//     node.next = list.head;
    
//     if (list.head != null) {
//         list.head.prev = node;
//     }

//     list.head = node;
//     // temp = node;
// }

// at end
function insertDoublyLinkedList(list, n) {
    const node = new Node(n);
    let temp = list.head;
    
    if (temp == null) {
        list.head = node;
        return;
    }

    while (temp.next) {
        temp = temp.next;
    }
    

    temp.next = node;
    // node.prev = temp;
    
}

const list = new DoublyLinkedList();
list.append(10);
// list.append(20);
// list.append(30);
list.printForward();

insertDoublyLinkedList(list, 5);
list.printForward();
