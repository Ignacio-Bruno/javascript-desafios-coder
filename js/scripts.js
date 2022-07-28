const TiendaStock = [
    {id:"01",producto:"Camiseta god gaming",precio: 15, imagen: '../recursos/godelite-remera.webp'},
    {id:"02",producto:"Camiseta alpha squad",precio:15, imagen: '../recursos/alpha-remera.webp'},
    {id:"03",producto:"Camiseta ghk",precio:17, imagen: '../recursos/ghk-remera.png'},
    {id:"04",producto:"Camiseta vanquish",precio:20, imagen: '../recursos/ghk-remera.png'},
    {id:"05",producto:"teclado redDragon vy007",precio:40, imagen: '../recursos/teclado2-imagen-tienda.png'},
    {id:"06",producto:"Camiseta bull gaming",precio:15, imagen: '../recursos/alpha-remera.webp'},
    {id:"07",producto:"Auriculares x gaming predator",precio:48, imagen: '../recursos/auriculares.png'},
    {id:"08",producto:"Teclado logitech rw07",precio:70, imagen: '../recursos/teclado2-imagen-tienda.png'},
    {id:"09",producto:"Camiseta Witness the journey",precio:12, imagen: '../recursos/ghk-remera.png'},
]

/* ENTER para acción */
let btn = document.querySelector('button');
let resultado = document.querySelector('p');

document.body.addEventListener('keypress',(e) =>{ 
    if(e.key =='Enter') resultado.innerText = "50% con tarjeta BBVA y Tarjeta Naranja / 30% con Mercado Pago ";
    btn.style.display = 'none';
});

const containerCards = document.getElementById("container-cards")

const selectProductos= document.getElementById("select-productos")

const btncreate = document.getElementById('btn-create')

let imgselect= '';
let idProducto = 0

/* agregar un elemento */
const modal = document.querySelector('.modal')
const closemodal = document.getElementById('close-modal')
const nuevoproducto = document.getElementById('nuevo-producto')
const nuevoprecio = document.getElementById('nuevo-precio')
const nuevaimagen = document.getElementById('nueva-imagen')
const botonproducto = document.getElementById('btn-create')

window.addEventListener("load", listSelect);
selectProductos.addEventListener('change', renderCards);
btncreate.addEventListener('click', showmodal);
botonproducto.addEventListener('click', createnewproduct);
nuevaimagen.addEventListener('change', importImagen);
closemodal.addEventListener('click',()=> modal.style.display = 'none');

function importImagen(event) {
    const imagenElegida = event.target.files[0];
    const objetoURL = URL.createObjectURL(imagenElegida)/* sirve para obtener la url de la imagen(esa es la idea) */
    imagenElegida = objetoURL;
}

function createnewproduct(){
    idProducto++;
    const tituloproducto = nuevoproducto.value;
    const precioproducto = nuevoprecio.value;
    const id = idProducto;
    
    const nuevoprod = { id:id ,producto: tituloproducto,precio: precioproducto, imagen: imagenElegida};

    TiendaStock.push(nuevoprod);/* se agrega el nuevo elemento/producto al array */
    listSelect();
    modal.style.display = 'none' 
}


function showmodal(){
    modal.style.display = 'flex'
}

/* validacion */
function renderCards() {
    TiendaStock.map ( elementos => {elementos.producto === selectProductos.value ? cardscreate(elementos) : null })
}

/* lista los elementos en stock */
function listSelect() {
    selectProductos.innerHTML ='' /* limpia el select */
    const anyoption = document.createElement('option')
    TiendaStock.map( elementos => {
        const option = document.createElement("option");
        option.value = elementos.producto;
        option.textContent = elementos.producto;
        selectProductos.appendChild(option);

    })
}
/* armado de las card en js */
function cardscreate(elementos) {
    const { id, producto, precio, imagen} = elementos;

    const card = document.createElement('div');
    card.classList.add('card-style');

    const imgCard = document.createElement('img');
    imgCard.setAttribute('src', imagen)
    imgCard.setAttribute('alt', producto)
    imgCard.classList.add('card-img');

    const nameCard = document.createElement('p')
    nameCard.textContent = producto;
    nameCard.classList.add('card-name');

    const precioCard = document.createElement('p');
    precioCard.classList.add('card-precio');
    precioCard.textContent = precio+"$";

    const boton = document.createElement('button')
    boton.setAttribute('id', id)
    boton.classList.add('btn-class')
    boton.textContent = "Añadir al carrito"

    card.appendChild(imgCard);
    card.appendChild(nameCard);
    card.appendChild(precioCard);
    card.appendChild(boton);

    containerCards.appendChild(card)
}


/* DEFINICIÓN: El algoritmo en javascript se inserta en el DOM(En el html, desde js), y los algoritmos y sus metodos son utiles para aplicar los eventos. */