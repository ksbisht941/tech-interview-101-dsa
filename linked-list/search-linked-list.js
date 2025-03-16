const { LinkedList, Node } = require('./setup');

function searchLinkedList(head, n) {
    if (head == null) return -1;
    
    let temp = head;
    let idx = 0;
    
    while (temp != null) {
        if (temp.value == n) {
            return idx;
        } else {
            temp = temp.next;
        }

        idx++;
    }

    return -1;
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.print();

const result = searchLinkedList(list.head, 40);
console.log(result);
