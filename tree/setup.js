class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert a node in the tree
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let queue = [this.root];
    while (queue.length) {
      let current = queue.shift();

      if (!current.left) {
        current.left = newNode;
        return;
      } else {
        queue.push(current.left);
      }

      if (!current.right) {
        current.right = newNode;
        return;
      } else {
        queue.push(current.right);
      }
    }
  }

  // Inorder Traversal (Left -> Root -> Right)
  inorderTraversal(node = this.root) {
    if (!node) return;
    this.inorderTraversal(node.left);
    console.log(node.value);
    this.inorderTraversal(node.right);
  }

  // Preorder Traversal (Root -> Left -> Right)
  preorderTraversal(node = this.root) {
    if (!node) return;
    console.log(node.value);
    this.preorderTraversal(node.left);
    this.preorderTraversal(node.right);
  }

  // Postorder Traversal (Left -> Right -> Root)
  postorderTraversal(node = this.root) {
    if (!node) return;
    this.postorderTraversal(node.left);
    this.postorderTraversal(node.right);
    console.log(node.value);
  }
}

// Export the BinaryTree class
module.exports = { TreeNode, BinaryTree };
