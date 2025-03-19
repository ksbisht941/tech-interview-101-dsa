const { CircularLinkedList, Node } = require('./setup'); // Import the CLL class

// function traverseCircularLinkedList(list) {
//     let temp = list.head;
//     console.log(temp.value);
//     for (let r = temp.next; r !== temp; r = r.next) {
//         console.log(r.value);
//     }
// }

function traverseCircularLinkedList(list) {

    const temp = list.head;
    let r = list.head;

    do {
        console.log(r.value);
        r = r.next;
    } while (r !== temp);
}


const cll = new CircularLinkedList();

// Append nodes
cll.append(10);
cll.append(20);
cll.append(30);
cll.append(40);
cll.append(50);
cll.print();

traverseCircularLinkedList(cll);

cll.print();
