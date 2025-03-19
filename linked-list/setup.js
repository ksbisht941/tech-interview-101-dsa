class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  delete(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  print() {
    let current = this.head;
    let output = "";
    while (current) {
      output += current.value + " -> ";
      current = current.next;
    }
    console.log(output + "null");
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Insert at the end
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  // Insert at the beginning
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  // Delete a node by value
  delete(value) {
    if (!this.head) return;

    let current = this.head;

    while (current && current.value !== value) {
      current = current.next;
    }

    if (!current) return; // Value not found

    if (current === this.head) {
      this.head = current.next;
      if (this.head) this.head.prev = null;
    } else if (current === this.tail) {
      this.tail = current.prev;
      this.tail.next = null;
    } else {
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
  }

  // Print forward
  printForward() {
    let current = this.head;
    let output = '';
    while (current) {
      output += current.value + ' ⇆ ';
      current = current.next;
    }
    console.log(output + 'null');
  }

  // Print backward
  printBackward() {
    let current = this.tail;
    let output = '';
    while (current) {
      output += current.value + ' ⇆ ';
      current = current.prev;
    }
    console.log(output + 'null');
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at the end
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;  // Circular link to itself
      return;
    }

    let current = this.head;

    while (current.next !== this.head) {
      current = current.next;
    }

    current.next = newNode;
    newNode.next = this.head;  // Circular connection
  }

  // Insert at the beginning
  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;  // Circular link to itself
      return;
    }

    let current = this.head;

    // Traverse to the last node
    while (current.next !== this.head) {
      current = current.next;
    }

    newNode.next = this.head;  // New node points to old head
    current.next = newNode;    // Last node points to new node
    this.head = newNode;       // Update head
  }

  // Delete a node by value
  delete(value) {
    if (!this.head) return;

    let current = this.head;
    let prev = null;

    do {
      if (current.value === value) {
        if (prev) {
          prev.next = current.next;

          // If deleting the head, update it
          if (current === this.head) {
            this.head = current.next;
          }
        } else {
          // Deleting the only node
          if (current.next === this.head) {
            this.head = null;
          } else {
            let last = this.head;
            while (last.next !== this.head) {
              last = last.next;
            }
            last.next = current.next;
            this.head = current.next;
          }
        }
        return;
      }
      prev = current;
      current = current.next;
    } while (current !== this.head);
  }

  // Print the circular linked list
  print() {
    if (!this.head) {
      console.log('List is empty');
      return;
    }

    let current = this.head;
    let output = '';

    do {
      output += `${current.value} -> `;
      current = current.next;
    } while (current !== this.head);

    console.log(output + `(head: ${this.head.value})`);
  }
}

// Export the CircularLinkedList class
module.exports = CircularLinkedList;


// Export the classes
module.exports = { Node, LinkedList, DoublyLinkedList, CircularLinkedList };
