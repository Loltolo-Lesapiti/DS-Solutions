//This file includes all the BST operations.
//Create a node class.
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//Create a BST class.
class Bst {
  constructor() {
    this.root = null;
  }
  //Check if the tree is empty.
  isEmpty() {
    return this.root === null;
  }
  //Insert a node.
  insert(value) {
    //create an instance of the node and pass the value.
    const newNode = new Node(value);
    //Check if its empty, call insertion method to help.
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  // The insertion method.
  insertNode(root, newNode) {
    if (root.value > newNode) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  //Finding if the node exists.
  find(root, searchNode) {
    if (this.isEmpty()) {
      return false;
    } else {
      if (root.value === searchNode) {
        return true;
      } else {
        if (root.value < searchNode) {
          return this.find(root.left, searchNode);
        } else {
          return this.find(root.right, searchNode);
        }
      }
    }
  }
  //Traversing through a tree Breath First Search (BST)
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  //Preorder.
  preOrder(root) {
    if (root) {
      this.preOrder(root.left);
      console.log(root.value);
      this.preOrder(root.right);
    }
  }

  //Post Order.
  postOrder(root) {
    this.postOrder(root.value);
    console.log(root.value);
    this.preOrder(root.right);
  }
  //Breath First Search Traversal.
  levelOrder(root) {
    let queue = [];
    queue.push(root);
    while (queue.length) {
      let cur = queue.shift();
      console.log(cur.value);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
  }
  //Min value.
  min(root) {
    if (root.left) {
      return this.min(root.left);
    } else {
      return root.value;
    }
  }
  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }
  depth = (root) => {
    if (root === null) {
      return 0;
    }
    if (root.left === null && root.right === null) {
      return 1;
    }

    return root.left && root.right
      ? Math.min(depth(root.left), depth(root.right)) + 1
      : 1;
  };
}

const bst = new Bst();
bst.insert(10);
bst.insert(5);
bst.insert(6);

console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
console.log("The maximum depth is :");
console.log(bst.depth());
