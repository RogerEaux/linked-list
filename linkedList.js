// Props

// * size returns the total number of nodes in the list

// * head returns the first node in the list

// * tail returns the last node in the list

// Functions

// * toString represents your LinkedList objects as strings, so you can print them out and preview
// them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null

// prepend(value) adds a new node containing value to the start of the list

// append(value) adds a new node containing value to the end of the list

// at(index) returns the node at the given index

// pop removes the last element from the list

// contains(value) returns true if the passed in value is in the list and otherwise returns false.

// find(value) returns the index of the node containing value, or null if not found.

import createNode from './node.js';

function createLinkedList(value) {
  let listSize = 1;
  let listHead = createNode(value);
  let listTail = listHead;

  function toString() {
    let current = listHead;
    let stringified = '';

    while (current !== null) {
      stringified += `(${current.value}) ->`;
      current = current.next;
    }

    return `${stringified} null`;
  }

  return {
    get size() {
      return listSize;
    },

    get head() {
      return listHead;
    },

    get tail() {
      return listTail;
    },

    toString,
  };
}

export default createLinkedList;
