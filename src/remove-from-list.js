const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface */
 /* class ListNode {
    constructor(x) {
      this.value = x;
      this.next = null;
    }
  }*/
/* class Node {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
 }*/

function removeKFromList(l, k) {
  /*let tmp = l;
  tmp = tmp.next;

  if( tmp.next === null) return tmp;
  if( tmp.next.x === k) {
    tmp.next = tmp.next.next;
  }
*/
 const node = new ListNode();
 /*let node = l;
 last = null;

 if( node && node.value === k) {
  return node.next;
 }
 while ( node && node.value !== k) {
  last - node;
  node = node.next;
 }
 if ( last && node.value === k) {
  last.next = node.next;
 }
 return l;*/
  node.next = l;
  let current = node;

 while(current.next !== null) {
  if (current.next.x === k) {
    current.next = current.next.next;
  } else {
    current = current.next;
  }
  return l;
 }
 /*if (l.head === null) return;
 if (l.head.x === k) {
  l.head = l.head.next;
  l.lenght --;
  return;
 }
 let current = node;
 while (current.next !== null) {
  if (current.next.x === k) {
    current.next = current.next.next;
    l.lenght --;
    return;
  }
    current = current.next;
  }
  return l.head;
 }*/
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  removeKFromList
};
