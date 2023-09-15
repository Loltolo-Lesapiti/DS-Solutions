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
  // Delting from front.
  deleteFromStart = () => {
    let cur = this.head;
    this.head = cur.next;
  };

  //Delete from end.
  deleteFromEnd = () => {
    let cur = this.head;
    let prev = null;
    while (cur.next) {
      prev = cur;
      cur = cur.next;
    }
    prev.next = null;
  };
  //Remove at a particular position.
  removeAtPos = (pos) => {
    let cur = this.head;
    let prev = null;
    let count = 1;
    while (cur.next && count < pos) {
      prev = cur;
      cur = cur.next;
      count++;
    }
    if (count !== pos) {
      console.log("Position out of reach");
    } else {
      prev.next = cur.next;
    }
  };
  // Find the middle of a linklist.
  middle = () => {
    let slowPointer = this.head;
    let firstPointer = this.head;
    while (firstPointer && firstPointer.next) {
      slowPointer = slowPointer.next;
      firstPointer = firstPointer.next.next;
    }
    return slowPointer.data;
  };
  //Reverse a linkedList.
  reverse = () => {
    let cur = this.head;
    let prev = null;
    let next = null;
    while (cur) {
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    this.head = prev;
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
myList.addFromStart(5);
myList.addFromStart(6);
myList.addFromStart(7);
myList.addFromStart(8);
myList.addFromStart(9);

console.log("Original list :");
myList.print();
myList.reverse();
console.log("Reversed list :");
myList.print();
