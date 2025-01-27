const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}
/*class Queue {
  constructor () {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  //  this.leght = 0;
  }

  getUnderlyingList() {
    return this.storage[this.head];
  }

  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail ++;

  }

  dequeue() {
    let rem = this.storage[this.head];
    delete this.storage[this.head];
    this.head ++;
    return rem;
  }
}
*/

class Queue {
  constructor () {
    this.head = null;
    this.tail = null;
    this.lenght = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue (value) {
    const node = new Node(value);
    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.lenght ++;
  }

  dequeue () {
    let current = this.head;
    this.head = this.head.next;
    this.lenght --;
    return current.value;
  }
}
module.exports = {
  Queue
};
