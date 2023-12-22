
// logra tipear funciones
function saludar({name, age}: {name:string, age:string}): string{
    console.log(`hola  ${name} ${age}`)
    return name
}

saludar({ name: "star", age: "asd"})



// utilizar funciones como parámetros
const holafromfunction = (fn: (name: string) => void ) => {
    fn('Miguel')
}

const sayhi = (name:string) => {
    console.log(`hola ${name}`)
}

holafromfunction(sayhi)


// tipas arrow function


const sumar = (a: number, b: number): number => {
    return a + b
}


const restar: (a:number, b: number) => number = (a, b) => {
    return a - b
}

function throwError(message: string): never {
    throw new Error(message)
}




const avengers = ['spider', 'hulk', 'capitan']

avengers.forEach(avengers => {
    console.log(avengers.toUpperCase())
})



// Objetos

let hero = {
    name: 'thor',
    age: 1500
};

hero.age = 15001