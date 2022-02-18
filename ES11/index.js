//Dinamic Import

const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});




//BigInt
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

//Promise.allSettled
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));


//Global This
console.log(window);
console.log(globalThis);

//Operador coalescente nulo (??)
//ej1
const fooo = 'asd' ?? 'default';
console.log(fooo);
//ej2
const fooo = null ?? 'default string';
console.log(fooo);

//Encadenamiento opcional (?.)
const user = {}
    console.log(user?.profile?.email);
