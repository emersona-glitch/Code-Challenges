
let array = ['a', 'b', 'c'];
let i = 0;
let hashTable = {};
while (i<array.length) {
  hashTable[array[i]]=i;
  i++;
}
console.log(hashTable);

if (hashTable[c]) {
  console.log('it\'s there');
}