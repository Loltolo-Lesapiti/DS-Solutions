// Singly Linked List operations, step by step.
// Create a node class.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
//Create a linkedList class.
class linkedList {
  constructor() {
    this.head = null;
  }
  // Add a node at the begining of the list.
  addFromStart = (data) => {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  };
  //Print the nodes.
  print = () => {
    let curNode = this.head;
    while (curNode) {
      console.log(curNode.data);
      curNode = curNode.next;
    }
  };
}
