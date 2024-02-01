function createNode(value = null, next = null) {
  let nodeValue = value;
  let nodeNext = next;

  return {
    get value() {
      return nodeValue;
    },

    set value(newValue) {
      nodeValue = newValue;
    },

    get next() {
      return nodeNext;
    },

    set next(newNext) {
      nodeNext = newNext;
    },
  };
}

export default createNode;
