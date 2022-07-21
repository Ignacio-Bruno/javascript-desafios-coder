const TiendaStock = [
    {id:"01",producto:"Camiseta god gaming",precio: 15, imagen: ''},
    {id:"02",producto:"Camiseta alpha squad",precio:15, imagen: ''},
    {id:"03",producto:"Camiseta ghk",precio:17, imagen: ''},
    {id:"04",producto:"Camiseta vanquish",precio:20, imagen: ''},
    {id:"05",producto:"teclado redDragon vy007",precio:40, imagen: ''},
    {id:"06",producto:"Camiseta bull gaming",precio:15, imagen: ''},
    {id:"07",producto:"Auriculares x gaming predator",precio:48, imagen: ''},
    {id:"08",producto:"Teclado logitech rw07",precio:70, imagen: ''},
    {id:"09",producto:"Camiseta Witness the journey",precio:12, imagen: ''},
]

const containerCards = document.getElementById("container-cards")

const selectProductos= document.getElementById("select-productos")

window.addEventListener("load", listSelect)
selectProductos.addEventListener('change', renderCards)

/* validacion */
function renderCards() {
    TiendaStock.map ( Stock => {Stock.producto === selectProductos.value ? cardscreate(TiendaStock) : null })
}

/* lista los elementos en stock */
function listSelect() {
    TiendaStock.map( TiendaStock => {
        const option = document.createElement("option");
        option.value = TiendaStock.producto;
        option.textContent = TiendaStock.producto;
        selectProductos.appendChild(option);

    })
}
/* armado de las card en js */
function cardscreate(TiendaStock) {
    const { id, producto, precio, imagen} = TiendaStock;

    const card = document.createElement('div');
    card.classList.add('');/* falta crear la clase con css */

    const imgCard = document.createElement('img');
    imgCard.setAttribute('src', imagen)
    imgCard.setAttribute('alt', producto)
    imgCard.classList.add('');/* falta crear la clase con css */

    const nameCard = document.createElement('p')
    nameCard.textContent = producto;
    nameCard.classList.add('');/* falta crear la clase con css */

    const precioCard = document.createElement('p');
    precioCard.classList.add('');/* falta crear la clase con css */
    precioCard.textContent = precio;

    const boton = document.createElement('button')
    boton.setAttribute('id', id)
    boton.classList.add('')
    boton.textContent = "Añadir al carrito"

    card.appendChild(imgCard);
    card.appendChild(nameCard);
    card.appendChild(precioCard);
    card.appendChild(boton);

    containerCards.appendChild(cards)
}


function preciototal(){
    const total = TiendaStock.precio(prompt("Elija el producto por su id")) + TiendaStock.precio(prompt("Elija el producto por su id"));
    console.log("El total es:"+ total);
}