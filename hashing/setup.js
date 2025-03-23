class HashMap {
  constructor(size = 16) {
    this.table = new Array(size);
    this.size = size;
  }

  // Hash function
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  // Add or update key-value pair
  set(key, value) {
    const index = this._hash(key);

    if (!this.table[index]) {
      this.table[index] = [];
    }

    // Update value if the key already exists
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    this.table[index].push([key, value]);
  }

  // Retrieve value by key
  get(key) {
    const index = this._hash(key);
    const bucket = this.table[index];

    if (!bucket) return undefined;

    for (let pair of bucket) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return undefined;
  }

  // Remove a key-value pair
  remove(key) {
    const index = this._hash(key);
    const bucket = this.table[index];

    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  // Print the hash map
  print() {
    this.table.forEach((bucket, index) => {
      if (bucket && bucket.length > 0) {
        console.log(`${index}:`, bucket);
      }
    });
  }
}

class HashSet {
    constructor(size = 16) {
      this.table = new Array(size);
      this.size = size;
    }
  
    // Hash function
    _hash(value) {
      let hash = 0;
      const str = value.toString();  // Ensure compatibility with any data type
      for (let i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i);
      }
      return hash % this.size;
    }
  
    // Add value (only unique)
    add(value) {
      const index = this._hash(value);
  
      if (!this.table[index]) {
        this.table[index] = [];
      }
  
      for (let item of this.table[index]) {
        if (item === value) return;  // Prevent duplicates
      }
  
      this.table[index].push(value);
    }
  
    // Check if value exists
    has(value) {
      const index = this._hash(value);
  
      if (!this.table[index]) return false;
  
      for (let item of this.table[index]) {
        if (item === value) {
          return true;
        }
      }
  
      return false;
    }
  
    // Remove value
    remove(value) {
      const index = this._hash(value);
      
      if (!this.table[index]) return false;
  
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i] === value) {
          this.table[index].splice(i, 1);
          return true;
        }
      }
      return false;
    }
  
    // Print the set
    print() {
      this.table.forEach((bucket, index) => {
        if (bucket && bucket.length > 0) {
          console.log(`${index}:`, bucket);
        }
      });
    }
}  

// Export the class
module.exports = { HashMap, HashSet };
