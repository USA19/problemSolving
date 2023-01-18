class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next
  }
}

class LinkedList {
  size = 0;
  head = null;


  appendNodeAtFirstIndex(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  appendNodeAtLastIndex(data) {
    let node = new Node(data);
    let current = this.head;

    if (!this.head) {
      return this.head = node;
    }



    while (current.next) {
      current = current.next
    };

    current.next = node;
    this.size++;
  }

  appendAtParticularIndex(data, index) {
    if (index > this.size) {
      return "out of rand value"
    };

    let count = 0;
    let current = this.head;
    let previous = null;
    const node = new Node(data);
    // if it is the first index;
    if (index === 0) {
      return this.appendNodeAtFirstIndex(data);
    }

    // if it is the last index;
    if (index === (this.size - 1)) {
      return this.appendNodeAtLastIndex(data);
    }

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }



  removeFromFirstIndex() {
    if (!this.head) {
      return
    }

    let current = this.head;
    this.head = current.next;
    this.size--;
  }

  removeFromLastIndex() {
    if (!this.head) {
      return
    }

    let count = 0;
    let current = this.head;
    let previous;
    while (count < (this.size - 1)) {
      count++;
      previous = current;
      current = current.next;
    }

    previous.next = current.next
    this.size--;
  };

  removeAtParticularIndex(index) {
    if (index > this.size) {
      return;
    }

    if (index === 0) {
      return this.removeFromFirstIndex();
    }

    if (index === (this.size - 1)) {
      return this.removeFromLastIndex();
    }

    let count = 0;
    let current = this.head;
    let previous;

    while (count < index) {
      count++;
      previous = current;
      current = current.next;
    }

    previous.next = current.next
  }

  printAllNodesData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next
    }
  }

}

const ll = new LinkedList();
ll.appendNodeAtFirstIndex(10);
ll.appendNodeAtFirstIndex(20);
ll.appendNodeAtLastIndex(50);
ll.appendAtParticularIndex(60, 2)
ll.printAllNodesData()
console.log("????????????????????????remove")
ll.removeFromFirstIndex()
ll.printAllNodesData();

console.log("????????????????????????remove------Last----------")
ll.removeFromLastIndex()
ll.printAllNodesData();

console.log("????????????????????????add------Last----------")
ll.appendAtParticularIndex(100, 1)
ll.printAllNodesData();

console.log("????????????????????????remove------From 1 index----------")
ll.removeAtParticularIndex(1)
ll.printAllNodesData();
