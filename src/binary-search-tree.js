const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.right = null;
//     this.left = null;
//   }
// }


class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addIn(this.treeRoot, data);
    function addIn(node, data) {
      if(!node) {
        return new Node(data);
      }
      if(node.data === data) {
        return node;
      }
      if(data < node.data) {
        node.left = addIn(node.left, data)
      } else {
        node.right = addIn(node.right, data)
      }
      return node;
    }
  }

  has(data) {
    return searchIn(this.treeRoot, data);
    function searchIn(node, data) {
      if(!node) return false;
      if(data === node.data) return true;
      if(data < node.data) return searchIn(node.left, data);
      if(data > node.data) return searchIn(node.right, data);
    }
  }

  find(data) {
    return findIn(this.treeRoot, data);
    function findIn(node, data) {
      console.log(node);
      if(!node) return null;
      if(data === node.data) return node;
      if(data < node.data) return findIn(node.left, data);
      if(data > node.data) return findIn(node.right, data);
    }
  }

  remove(data) {
    this.treeRoot = removeNode(this.treeRoot, data);
    function removeNode(node, data) {
      if(!node) return null;
      if(data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if(data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right) return null;
        if(!node.left) {
          node = node.right;
          return node;
        }
        if(!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while(minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if(!this.treeRoot) return;
    let minNode = this.treeRoot;
    while(minNode.left) {
      minNode = minNode.left;
    }
    return minNode.data;
  }

  max() {
    if(!this.treeRoot) return;
    let maxNode = this.treeRoot;
    while(maxNode.right) {
      maxNode = maxNode.right;
    }
    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};