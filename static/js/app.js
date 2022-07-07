function suma(p1, p2){
    console.log(p1 + p2)
    console.log("como estamos muchachos jajajaja ahora no se que paso")
}

const fruits = new Map([
    ["apples", 500],
    ["bananas", 200],
    ["oranges", 100]
]);

for(fruta of fruits){
    console.log(fruta[1])
}


// metodos  

const person = {
    firstName: "Richard",
    lastName: "Huallpa",
    id: 71816636,
    fullname: function(){
        return (this.firstName + " " + this.lastName).toUpperCase();
    }
}

console.log(person.fullname()) 