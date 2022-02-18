// function newFunction(name, age, country) {
//   var name = name || "oscar";
//   var age = age || "32";
//   var country = country || "MX";
//   console.log(name, age, country);
// }


// function newFunction2(name = "oscar", age = "32", country = "MX") {
//   console.log(name, age, country);
// }

// newFunction2();
// newFunction2("Ricardo", "23", "CO");


let name = 'Oscar';
let age = 32;

//es 5
obj = { name: name, age: age };

//es6
obj2 = { name, age};
console.log(obj2);

//arrow function
const names = [
  {name: 'Oscar', age: 32},
  {name: 'Yesica', age: 27}
]

//antes
let listOfNames = names.map(function (item) {
  console.log(item.name);
})

//es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age) => {
  ...
}

const listOfNames4 = name => {
  ...
}

const square = num => num * num;

//promesas => asincronismo
const helloPromise = () => {
  return new Promise((resolve, reject) => {
if (true) {
  resolve ('siii');
} else {
  reject ('upss');
}
  });
}

helloPromise()
.then(response => console.log(response))
.then(() => console.log('hola'))
.catch(error => console.log(error));

//clases
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB
  }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//Modulos
const hello = () => {
  return 'hello!'
}

export default hello;

//en otro documento
import {hello} from './documento';

hello();

//Generadores
function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'world ';
  }
  if (true) {
    yield 'I am Fede';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

