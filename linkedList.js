// Props

// * size returns the total number of nodes in the list

// * head returns the first node in the list

// * tail returns the last node in the list

// Functions

// * toString represents your LinkedList objects as strings, so you can print them out and preview
// them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null

// * prepend(value) adds a new node containing value to the start of the list

// * append(value) adds a new node containing value to the end of the list

// * at(index) returns the node at the given index

// pop removes the last element from the list

// contains(value) returns true if the passed in value is in the list and otherwise returns false.

// find(value) returns the index of the node containing value, or null if not found.

import createNode from './node.js';

function createLinkedList(value) {
  let listSize = 1;
  let listHead = createNode(value);
  let listTail = listHead;

  function size() {
    return listSize;
  }

  function head() {
    return listHead;
  }

  function tail() {
    return listTail;
  }

  function prepend(val) {
    listHead = createNode(val, listHead);
    listSize += 1;

    return listHead;
  }

  function append(val) {
    listTail.next = createNode(val);
    listTail = listTail.next;
    listSize += 1;

    return listTail;
  }

  function at(index) {
    if (index > listSize - 1 || index < 0) {
      return null;
    }
    let current = listHead;

    for (let i = 0; i !== index; i += 1) {
      current = current.next;
    }
    return current;
  }

  function toString() {
    let current = listHead;
    let stringified = '';

    while (current !== null) {
      stringified += `(${current.value}) -> `;
      current = current.next;
    }
    stringified += 'null';

    return stringified;
  }

  return {
    size,
    head,
    tail,
    toString,
    prepend,
    append,
    at,
  };
}

export default createLinkedList;
