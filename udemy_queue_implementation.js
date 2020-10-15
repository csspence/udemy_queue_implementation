/*
Udemy JavaScript Algorithms and Data Structures Masterclass
Queue
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let node = new Node(value);
    if(this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return this;
  }

  dequeue() {
    let temp = this.first;
    if(this.size === 0) {
      return false;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.size--;
    return temp;
  }
}
