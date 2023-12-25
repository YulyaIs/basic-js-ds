const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor (data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}


class BinarySearchTree {
  constructor() {
  this.node = null;
  }

  root() {
    return this.node;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    let newNode = new Node(data)
    if (this.node === null) {
      this.node = newNode;
    } else {
      this.addRoot(this.node, newNode)
    }
  }
  addRoot (node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
    } else {
      this.addRoot(node.left, newNode)
    }
  } else {
      if (newNode.data > node.data) {
        if(!node.right) {
        node.right = newNode;
      } else {
        this.addRoot(node.right, newNode)
      }
    }
  }
 } //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here


  has(data) {
    let newNode = new Node(data)
    this.hasRoot(this.node, newNode);
  }
    hasRoot(node, newNode) {
    if (!node) {
      return false;
    }
    if (newNode.data === node.data) {
      return true;
    }
    else if (node.data > newNode.data) {
      return this.hasRoot(node.left, newNode)
    }
    else {
      return this.hasRoot(node.right, newNode);
    }
  }
     //  this.node = newNode;
  //  } else {
     // this.hasRoot(this.node, newNode)
   // }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}
module.exports = {
  BinarySearchTree
};