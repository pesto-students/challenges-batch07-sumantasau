import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const newNode = new LinkListNode(value);
    newNode.next = this.head;
    this.head = newNode.next;
    return this.head;
  }

  append(value) {
    const newNode = new LinkListNode(value);
    if (!this.head) {
      this.head = newNode;
      return this.head;
    }
    let tailNode = this.head;
    while (tailNode.next !== null) {
      tailNode = tailNode.next;
    }
    tailNode.next = newNode;
    return this.head;
  }

  delete(value) {
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        if (prevNode === null) {
          this.head = currentNode;
        } else {
          prevNode.next = currentNode.next;
        }
        return true;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    return false;
  }

  traverse() {
    let currentNode = this.head;
    const arrItem = [];
    while (currentNode !== null) {
      arrItem.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arrItem;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  length() {
    let listLength = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      listLength += 1;
      currentNode = currentNode.next;
    }
    return listLength;
  }
}
