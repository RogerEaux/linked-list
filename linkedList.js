import createNode from './node.js';

function createLinkedList(initialValue) {
  let listSize = 1;
  let listHead = createNode(initialValue);
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

  function prepend(value) {
    if (listHead) {
      listHead = createNode(value, listHead);
    } else {
      listHead = createNode(value);
      listTail = listHead;
    }
    listSize += 1;

    return listHead;
  }

  function append(value) {
    if (listTail) {
      listTail.next = createNode(value);
      listTail = listTail.next;
    } else {
      listHead = createNode(value);
      listTail = listHead;
    }
    listSize += 1;

    return listTail;
  }

  function pop() {
    if (listSize === 0) return null;

    let popped;

    if (listSize === 1) {
      popped = listHead;
      listHead = null;
      listTail = null;
    } else {
      let current = listHead;

      while (current.next !== listTail) {
        current = current.next;
      }
      popped = current.next;
      current.next = null;
      listTail = current;
    }

    listSize -= 1;

    return popped;
  }

  function popFirst() {
    if (listSize === 0) return null;

    const popped = listHead;

    listHead = listHead.next;
    if (listSize === 1 || listSize === 2) {
      listTail = listHead;
    }

    listSize -= 1;

    return popped;
  }

  function contains(value) {
    let current = listHead;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.next;
    }

    return false;
  }

  function find(value) {
    let current = listHead;
    for (let i = 0; i < listSize; i += 1) {
      if (current.value === value) return i;
      current = current.next;
    }

    return null;
  }

  function at(index) {
    if (index > listSize - 1 || index < 0) return null;
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
    pop,
    popFirst,
    contains,
    find,
  };
}

export default createLinkedList;
