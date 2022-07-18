/* DESAFÍO COMPLEMENTARIO */
/*function cicloFor(numero){
    for(let i=0; i<numero; i++){
        console.log(i);
    }
}

cicloFor(11)


let password = "";*/

/* while(password != "contraseña"){
    password = prompt("Introduzca su contraseña")
}

console.log("Fin del bucle")


do{
    password = prompt("Introduzca su contraseña")

} while(password != "contraseña") */


/* SIMULADOR INTERACTIVO */
/* Algoritmo: Es un conjunto prescrito de instrucciones o reglas bien definidas, ordenadas y finitas que permite llevar a cabo una actividad mediante pasos sucesivos que no generen dudas a quien deba hacer dicha actividad */

/* class Producto{
    constructor(nombre, precio, categoria){
        this.nombre = nombre.toUpperCase();
        this.precio = parseInt(precio);
        this.categoria = categoria;
        this.vendido = false     variable booleana que se pone en true una vez que se vende, arrancando en false
    }

    sumarIVA(){
        this.precio = this.precio * 1.21;
    }

    vender(){
        this.vendido = true;
    }
}

const producto1 = new Producto("Remera LIQUID sports", 500, "ropa");
const producto2 = new Producto("Auriculares HyperX", 800, "tecnología");
producto1.sumarIVA()
console.log("El precio con IVA  incluido es:" + producto1.precio);

producto1.vender();
console.log(producto1.vendido); */

/* arrays COMPLEMENTARIO */

const invitados = ["Jorge", "Luis", "Samuel", "Davo", "Nicolas"]

invitados.push("Emilio")

if(invitados.includes("Jorge")){
    quitar = invitados.indexOf("Jorge");
    invitados.slice(quitar, 1)
} 



