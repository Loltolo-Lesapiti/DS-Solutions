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
  addFromEnd = (data) => {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let curNode = this.head;
      while (curNode.next) {
        curNode = curNode.next;
      }
      curNode.next = newNode;
      curNode = newNode;
    }
  };
  // Add a node at a pecified position.
  addAtPos = (data, pos) => {
    if (pos === 1) {
      this.addFromStart(data);
    } else {
      let newNode = new Node(data);
      let curNode = this.head;
      let prevNode = null;
      let count = 1;
      while (curNode && count < pos) {
        count++;
        prevNode = curNode;
        curNode = curNode.next;
      }
      if (count !== pos) {
        console.log("Position out of reach");
      } else {
        prevNode.next = newNode;
        newNode.next = curNode;
      }
    }
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
// Testing.
let myList = new linkedList();
myList.addFromStart(1);
myList.addFromStart(2);
myList.addFromStart(3);
myList.addFromStart(4);
myList.addFromEnd(5);
myList.addAtPos(6, 3);

myList.print();
