let btn = document.querySelector('button');
let resultado = document.querySelector('p');

document.body.addEventListener('keypress',(e) =>{ 
    if(e.key =='Enter') resultado.innerText = "50% con tarjeta BBVA y Tarjeta Naranja / 30% con Mercado Pago ";
    btn.style.display = 'none';
});

        document.addEventListener('DOMContentLoaded', () => {
            const TiendaStock = [
                {id:01,producto:"Camiseta god gaming",precio: 15, imagen: '../recursos/godelite-remera.webp'},
                {id:02,producto:"Camiseta alpha squad",precio:15, imagen: '../recursos/alpha-remera.webp'},
                {id:03,producto:"Camiseta ghk",precio:17, imagen: '../recursos/ghk-remera.png'},
                {id:04,producto:"Camiseta vanquish",precio:20, imagen: '../recursos/ghk-remera.png'},
                {id:05,producto:"teclado redDragon vy007",precio:40, imagen: '../recursos/teclado2-imagen-tienda.png'},
                {id:06,producto:"Camiseta bull gaming",precio:15, imagen: '../recursos/alpha-remera.webp'},
                {id:07,producto:"Auriculares x gaming predator",precio:48, imagen: '../recursos/auriculares.png'},
                {id:08,producto:"Teclado logitech rw07",precio:70, imagen: '../recursos/teclado2-imagen-tienda.png'},
                {id:09,producto:"Camiseta Witness the journey",precio:12, imagen: '../recursos/ghk-remera.png'},
            ];

            let carrito = [];
            const moneda = '$';
            const DOMitems = document.querySelector('#items');
            const DOMcarrito = document.querySelector('#carrito');
            const DOMtotal = document.querySelector('#total');
            const DOMbotonVaciar = document.querySelector('#boton-vaciar');
            const miLocalStorage = window.localStorage;

            function renderizarProductos() {
                TiendaStock.forEach((info) => {
                    const Nodo = document.createElement('div');
                    Nodo.classList.add('card', 'col-sm-4');
                  
                    const CardBody = document.createElement('div');
                    CardBody.classList.add('card-body');
                   
                    const Title = document.createElement('h5');
                    Title.classList.add('card-title');
                    Title.textContent = info.producto;
                  
                    const Imagen = document.createElement('img');
                    Imagen.classList.add('img-fluid');
                    Imagen.setAttribute('src', info.imagen);
                   
                    const Precio = document.createElement('p');
                    Precio.classList.add('card-text');
                    Precio.textContent = `${info.precio}${moneda}`;
                  
                    const NodoBoton = document.createElement('button');
                    NodoBoton.classList.add('btn', 'btn-primary');
                    NodoBoton.textContent = '+';
                    NodoBoton.setAttribute('marcador', info.id);
                    NodoBoton.addEventListener('click', anyadirProductoAlCarrito);
                  
                    CardBody.appendChild(Imagen);
                    CardBody.appendChild(Title);
                    CardBody.appendChild(Precio);
                    CardBody.appendChild(NodoBoton);
                    Nodo.appendChild(CardBody);
                    DOMitems.appendChild(Nodo);
                });
            }

            function anyadirProductoAlCarrito(evento) {
                
                carrito.push(evento.target.getAttribute('marcador'))
                
                renderizarCarrito();
                
                guardarCarritoEnLocalStorage();
            }

            
            function renderizarCarrito() {
                
                DOMcarrito.textContent = '';
                
                const carritoSinDuplicados = [...new Set(carrito)];
                
                carritoSinDuplicados.forEach((item) => {
                    
                    const miItem = TiendaStock.filter((itemBaseDatos) => {
                        
                        return itemBaseDatos.id === parseInt(item);
                    });
                    
                    const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                    
                        return itemId === item ? total += 1 : total;
                    }, 0);

                    const Nodo = document.createElement('li');
                    Nodo.classList.add('list-group-item', 'text-right', 'mx-2');
                    Nodo.textContent = `${numeroUnidadesItem} x ${miItem[0].producto} - ${miItem[0].precio}${moneda}`;

                    const miBoton = document.createElement('button');
                    miBoton.classList.add('btn', 'btn-danger', 'mx-5');
                    miBoton.textContent = 'X';
                    miBoton.style.marginLeft = '1rem';
                    miBoton.dataset.item = item;
                    miBoton.addEventListener('click', borrarItemCarrito);
                    Nodo.appendChild(miBoton);
                    DOMcarrito.appendChild(Nodo);
                });
                DOMtotal.textContent = calcularTotal();
            }

            function borrarItemCarrito(evento) {
                const id = evento.target.dataset.item;

                carrito = carrito.filter((carritoId) => {
                    return carritoId !== id;
                });
                renderizarCarrito();
                guardarCarritoEnLocalStorage();
            }

            function calcularTotal() {

                return carrito.reduce((total, item) => {

                    const miItem = TiendaStock.filter((itemBaseDatos) => {
                        return itemBaseDatos.id === parseInt(item);
                    });

                    return total + miItem[0].precio;
                }, 0).toFixed(2);
            }

            function vaciarCarrito() {
                carrito = [];
                renderizarCarrito();
                localStorage.clear();

            }

            function guardarCarritoEnLocalStorage () {
                miLocalStorage.setItem('carrito', JSON.stringify(carrito));
            }

            function cargarCarritoDeLocalStorage () {
                if (miLocalStorage.getItem('carrito') !== null) {
                    carrito = JSON.parse(miLocalStorage.getItem('carrito'));
                }
            }

            DOMbotonVaciar.addEventListener('click', vaciarCarrito);

            cargarCarritoDeLocalStorage();
            renderizarProductos();
            renderizarCarrito();
        });
