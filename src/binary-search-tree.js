const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootElement = null;
  }

  root() {
    return this.rootElement;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootElement) {
      this.rootElement = newNode;
      return;
    }

    let currentNode = this.rootElement;

    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    return this.find(data);
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootElement) {
      return;
    }

    let minEl = this.rootElement;

    while (minEl.left) {
      minEl = minEl.left;
    }

    return minEl.data;
  }

  max() {
    if (!this.rootElement) {
      return;
    }

    let maxEl = this.rootElement;

    while (maxEl.right) {
      maxEl = maxEl.right;
    }

    return maxEl.data;
  }
}

module.exports = {
  BinarySearchTree,
};
