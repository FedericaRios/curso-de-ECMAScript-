//Metodo replace de string Replace
const string = 'hola';
const replacedString = string.replace('h', 'l');
console.log(replacedString);

//es12 ReplaceAll
const string = 'hola hola';
const replacedString2 = string.replaceAll('h', 'l');
console.log(replacedString2);

//metodos privados (dentro de clases)
class Message {
    #show(val){
        console.log(val);
    };
    get #add(val) {
        ...
    }
}

const message = new Message();
message.show('hola!');

//metodo promise.any
const promise1 = new Promise((resolve,reject) => reject("1"));
const promise2 = new Promise((resolve,reject) => resolve("2"));
const promise3 = new Promise((resolve,reject) => resolve("3"));

Promise.any ([promise1, promise2, promise3])
.then(response => console.log(response));

//Nuevos operadores logicos
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);