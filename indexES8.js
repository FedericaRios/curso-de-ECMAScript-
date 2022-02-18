//Object Entries
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Object Values
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

// Padding(PadStart,PadEnd): nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
//Podría servir del lado del front , para mostrar una estructura de elementos.

const string ='hello';

console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12,' ------')) 
console.log('food'.padEnd(12,'  ------')) 

//Trailing comas, nos permite asignar elementos al objeto mediante comas.
const obj = {
    front:'Alej', // Puede existir
    back: 'Rel'
}


//Async Await
const helloWorld = () => {
    return new Promise ((resolve, reject) => {
         (true)
        ? setTimeout(() => resolve('hello world'), 3000)
        : reject(new Error('test error'))
    })
}

helloWorld()

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
} 

anotherFunction();
