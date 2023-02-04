var contador=0;
const producc = [];
var registrar = 0;

let text = "enviar 1"
document.getElementById("demo").innerHTML = "Por la putamare!";


function suma(p1, p2){
    console.log(p1 + p2)
    console.log("como estamos muchachos jajajaja ahora no se que paso")
}

var estudiantes = ["richard", "belidna", "richardo", "clauida", "Enrique"];

function saludar(estudiante){
    console.log(`hola queridisimo ${estudiante}`)
}
for(estudiante of estudiantes){
    saludar(estudiante)
}

while (estudiantes.length>0) {
    console.log(estudiantes)
    var estudiante = estudiantes.shift()
    saludar(estudiante)

}


function Productos(nombre, costo) {
    this.nombre = nombre;
    this.costo = costo;
}
var cantProduct = prompt("cuantos productos deseas añadir:")

while(contador<cantProduct){
    let nombre = prompt("nombre: ");
    let costo = prompt("costo: ");
    
    const nuevoproducto = new Productos(nombre, costo);
    producc.unshift(nuevoproducto);
    contador+=1;
}

console.log(producc)