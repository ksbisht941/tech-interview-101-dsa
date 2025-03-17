class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push item onto stack
    push(value) {
      this.items.push(value);
    }
  
    // Pop item from stack
    pop() {
      if (this.isEmpty()) return null;
      return this.items.pop();
    }
  
    // Peek at the top item
    peek() {
      return this.isEmpty() ? null : this.items[this.items.length - 1];
    }
  
    // Check if stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Print stack
    print() {
      console.log(this.items.join(' <- '));
    }
  }
  
  // Export the Stack class
  module.exports = Stack;
  