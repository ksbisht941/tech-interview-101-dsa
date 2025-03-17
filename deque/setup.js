class Deque {
  constructor() {
    this.items = [];
  }

  // Insert at the front
  addFront(value) {
    this.items.unshift(value);
  }

  // Insert at the back
  addRear(value) {
    this.items.push(value);
  }

  // Remove from the front
  removeFront() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  // Remove from the back
  removeRear() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  // Check if the deque is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the front item
  peekFront() {
    return this.isEmpty() ? null : this.items[0];
  }

  // Get the rear item
  peekRear() {
    return this.isEmpty() ? null : this.items[this.items.length - 1];
  }

  // Print the deque
  print() {
    console.log(this.items.join(" <- "));
  }
}

// Export the class
module.exports = Deque;
