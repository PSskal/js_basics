const compra = {tipo:"Online", modeol:"Carro", color: "blanco"}
compra.dueño = "Richard" //añadir nuevo, o cambiar el diccionario

console.log(compra) // imprimir en la consola

//operadores de javascript

let lenght = 16
let LastName = "Huallpa"
let x = {firstNmae: "Richard", LastName: "Yapo"}

console.log(LastName)
// let p1 = 1
// let p2 = 3 

function miPrimerFunction(p1, p2){
    return p1 + p2
}

console.log(miPrimerFunction(3,4))

// obejtos lusgo aprender programación orientado a objectos 

const car = {
    tipo: "toyota", 
    modelo: "hilux", 
    año: 2000, 
    dueño: "Ricardo"
}

console.log(car.dueño) // imprimiendo en pantalla en la consla con diccionarios
console.log(car["dueño"]) // otra forma de accerde a un diccionario

// aprendiendo mapeo y filter

const carros = ["toyota", "bmw", "audi", "kia"]
carros[0]="corrolla"  // cambiar valor de la matriz lista
//console.log(carros[carros.length-1])  accder al ultimo valor de la lista

carros.map(nuevo=>(
    console.log(nuevo)
))

const numeros = [1, 3, 45, 65, 723, 2, 32, 43, 32]
const over18 = numeros.filter(mayores)
function mayores(value){
    return value > 18
}
console.log(over18)
console.log(numeros)

// metodos  en javascripts

const person = {
    firstName: "Richard",
    lastName: "Huallpa",
    id: 71816636,
    fullname: function(){
        return (this.firstName + " " + this.lastName).toUpperCase();
    }
}

console.log(person.fullname()) 