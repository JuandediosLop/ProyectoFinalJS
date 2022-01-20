let carritoCompras= new Array(); 
const addToShoppingCartButtons= document.querySelectorAll('.add-btn');

const shoppingCartItemsContainer =  document.getElementById('add-car-prodct');

/*Clase carrito: para el carro de compras del sitio */
class Carrito{
    constructor(nombre, precio, image, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.image= image;
        this.cantidad = cantidad;
    }
    sumarCantidad(cantidad){
        this.cantidad = cantidad + 1;
    }

}

/*Funcion la cual nos sirve para guardar en el storage  */
function guardarStorage(clave, valor){
    localStorage.setItem(clave, JSON.stringify(valor));    
}
/*Funcion la cual nos sirve para obtener los productos en el storage  */
function obtenerStorage(clave){
    const valor = JSON.parse(localStorage.getItem(clave));
    return valor
}   
/*Funcion la cual nos sirve para recuperar los productos en el storage y guardar en el array del carrito los productos recuperados  */
function recuperarArrayStorageParaCarrito(){
    let obtenerDatos = new Array();
    obtenerDatos = obtenerStorage('Productos');
    if(obtenerDatos != null){
        for( let carro  of  obtenerDatos ){
            carritoCompras.push(new Carrito( carro.nombre, carro.precio, carro.image, carro.cantidad));
        }
    }
}

recuperarArrayStorageParaCarrito(); 

/*Iteramos con un forEach para obtener la cart que se clickeo*/
addToShoppingCartButtons.forEach(addToCartButton=> {
    addToCartButton.addEventListener('click', addtoCartClicked)
});



/*Funcion que añade la carta al carrito obteniendo nombre, precio y la imagen*/
function addtoCartClicked(event){
    const button = event.target;
    const item = button.closest('.product-card');

    const itemTitle = item.querySelector('.product-brand').textContent;
    const itemPrice = item.querySelector('.price').textContent;
    const itemImage = item.querySelector('.product-thumb').src;

    if(carritoCompras != null){
        let productoDuplicado = carritoCompras.find( carrito => carrito.nombre === itemTitle );
        if(productoDuplicado == undefined){
            carritoCompras.push(new Carrito( itemTitle, itemPrice, itemImage, 1));
            guardarStorage('Productos', carritoCompras);
            addItemToShoppingCart(itemTitle , itemPrice, itemImage, 1)
        }else{
            productoDuplicado.sumarCantidad(productoDuplicado.cantidad);
            guardarStorage('Productos', carritoCompras);
            addItemToShoppingCart(itemTitle, itemPrice, itemImage)
        }
    }else if(carritoCompras==null){
        carritoCompras= new Array(new Carrito(itemTitle, itemPrice, itemImage, 1)); 
        guardarStorage('Productos', carritoCompras);
        addItemToShoppingCart(itemTitle, itemPrice, itemImage, 1)
    }
}

/*Funcion que inserta en el HTML los productos */
function addItemToShoppingCart(title, price, image, cantidad){
    const elementTitle = shoppingCartItemsContainer.getElementsByClassName('titulo-product');

      for (let i = 0; i < elementTitle.length; i++) {
        if (elementTitle[i].innerText === title) {
            let elementQuantity = elementTitle[i].parentElement.parentElement.parentElement.querySelector('.cantidadProducto');
            elementQuantity.value++;
            return;
        }
      }

    const shoppingCartContent = `
    <div class="content-product-car">
        <div class="producto-carrito">
            <img src=${image} height="70px">
        </div>
        <div class="product-info-car">
            <div class="name-product-car">
                <p class="titulo-product">${title}</p>
            </div>
            <div class="price-product-car">
                <p class="precioActual">${price}</p>
                <p class="precioNormal">$240</p>
            </div>   
        </div>
        <div class="masCantidad">
            <input type="number" value="${cantidad}" class="cantidadProducto" id="cantidad-producto">
        </div>
        <div class="delete-product-car">
            <i class="fas fa-times-circle"></i>
        </div> 
    </div>  
    `;

    shoppingCartItemsContainer.innerHTML += shoppingCartContent;

    shoppingCartItemsContainer.querySelector('.cantidadProducto').addEventListener('change', quantityChanged);
}
function quantityChanged (event){
    let input = event.target;
    input.value <=0 ? input.value = 1 : null;


}

/* funcion que inserta en el HTML del carrito el contenido cuando se recarga*/
function obtenerValoresDeCarrito(){
    if(carritoCompras != null){
        for(let carritoCompra of carritoCompras){
            addItemToShoppingCart(carritoCompra.nombre, carritoCompra.precio, carritoCompra.image, carritoCompra.cantidad)
        }    
    }
}
obtenerValoresDeCarrito();