const { DoublyLinkedList } = require('./setup');

function reverseLinkedList(list) {
    // Start with the head of the list
    let temp = list.head;

    // If the list is empty or has only one node, no need to reverse
    if (temp == null || temp.next == null) {
        return;
    }

    // Initialize previous node as null and current node as the head
    let prev = null, curr = temp;

    // Traverse the list and reverse the links
    while (curr !== null) {
        // Store the next node
        const next = curr.next;
        // Reverse the current node's next pointer to point to the previous node
        curr.next = prev;
        // Reverse the current node's prev pointer to point to the next node
        curr.prev = next;
        // Move the previous node to the current node
        prev = curr;
        // Move to the next node in the original list
        curr = next;
    }

    // Update the head of the list to be the last node we visited
    list.head = prev;
}

const list = new DoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.printForward();

reverseLinkedList(list);

list.printForward();

// 10 -> 20 -> 30 -> 40 -> 50 -> null
// 50 -> 40 -> 30 -> 20 -> 10 -> null