//Metodo Flat
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat())

//Metodo FlatMap
let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

//Metodo TrimStart
let hello = '    hello world';
console.log(hello);
console.log(hello.trimStart());

//Metodo TrimEnd
let hello = 'hello world      ';
console.log(hello);
console.log(hello.trimEnd());

//Object.fromEntries()
let entries = [['name', 'oscar'], ['age', 32]];

console.log(Object.fromEntries(entries));

//Symbol.description
let miSymbl = 'My Simbol';
let symbol = Symbol(miSymbl);

console.log(symbol.description);