import createLinkedList from './linkedList.js';

const linkedList = createLinkedList(42);

console.log('Size', linkedList.size());
console.log('Head', linkedList.head().value);
console.log('Tail', linkedList.tail().value);
console.log(linkedList.toString());

console.log(
  'Prepend',
  linkedList.prepend(69).value,
  `\n${linkedList.toString()}`,
);
console.log(
  'Append',
  linkedList.append(13).value,
  `\n${linkedList.toString()}`,
);
console.log('Find 13', linkedList.find(13));
console.log('Find 2', linkedList.find(2));
console.log(
  `At ${linkedList.find(42)}`,
  linkedList.at(linkedList.find(42)).value,
);
console.log('Pop', linkedList.pop().value, `\n${linkedList.toString()}`);
console.log(
  'Pop first',
  linkedList.popFirst().value,
  `\n${linkedList.toString()}`,
);
console.log('Pop', linkedList.pop().value, `\n${linkedList.toString()}`);
console.log('Append', linkedList.append(2).value, `\n${linkedList.toString()}`);
console.log('Pop', linkedList.pop().value, `\n${linkedList.toString()}`);
console.log(
  'Prepend',
  linkedList.prepend(42).value,
  `\n${linkedList.toString()}`,
);
console.log('Contains 42', linkedList.contains(42));
console.log('Contains 69', linkedList.contains(69));
console.log(
  'Pop first',
  linkedList.popFirst().value,
  `\n${linkedList.toString()}`,
);
console.log('Contains 42', linkedList.contains(42));
console.log('Contains null', linkedList.contains(null));
