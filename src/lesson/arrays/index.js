//  Creation and Access

const arr = ['a', 'b', 'c', 'd', 'e'];

arr[0]; // 'a'
arr.at(0); // 'a' first index: 0
arr[1]; // 'b' last index: arr.length - 1
arr[10]; // undefined Dont throw an error if the index is out of bounds


Array.from({ length: 3 }, (_, i) => i * 2)