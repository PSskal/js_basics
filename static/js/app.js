function suma(p1, p2){
    console.log(p1 + p2)
    console.log("como estamos muchachos jajajaja ahora no se que paso")
}

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