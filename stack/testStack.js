const Stack = require('./setup'); // Import Stack class

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Output: 10 <- 20 <- 30

console.log('Top:', stack.peek()); // Output: Top: 30

stack.pop();
stack.print(); // Output: 10 <- 20
