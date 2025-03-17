const { BinaryTree } = require('./setup'); // Import BinaryTree class

const tree = new BinaryTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);

console.log('Inorder Traversal:');
tree.inorderTraversal(); // Output: 40 20 50 10 30

console.log('Preorder Traversal:');
tree.preorderTraversal(); // Output: 10 20 40 50 30

console.log('Postorder Traversal:');
tree.postorderTraversal(); // Output: 40 50 20 30 10
