const Deque = require('./setup'); // Import Deque class

const deque = new Deque();

deque.addRear(10);
deque.addRear(20);
deque.addFront(5);
deque.print(); // Output: 5 <- 10 <- 20

console.log('Front:', deque.peekFront()); // Output: Front: 5
console.log('Rear:', deque.peekRear()); // Output: Rear: 20

deque.removeFront();
deque.print(); // Output: 10 <- 20

deque.removeRear();
deque.print(); // Output: 10
