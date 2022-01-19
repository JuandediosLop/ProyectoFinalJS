let carritoCompras= new Array(); 
const addToShoppingCartButtons= document.querySelectorAll('.add-btn');
const shoppingCartItemsContainer =  document.getElementById('add-car-prodct');

/*Clase carrito: para el carro de compras del sitio */
class Carrito{
    constructor(nombre, precio, image){
        this.nombre = nombre;
        this.precio = precio;
        this.image= image;
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
        carritoCompras = obtenerStorage('Productos')
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
            carritoCompras.push(new Carrito( itemTitle, itemPrice, itemImage));
     
        }else if(carritoCompras==null){
            carritoCompras= new Array(new Carrito(itemTitle, itemPrice, itemImage)); 
        }
        guardarStorage('Productos', carritoCompras);
        addItemToShoppingCart(itemTitle, itemPrice, itemImage)

}

/*Funcion que inserta en el HTML los productos */
function addItemToShoppingCart(title, price, image){

    const elementTitle = shoppingCartItemsContainer.getElementsByClassName('titulo-product');

    for(let i = 0; i<elementTitle.length; i ++){

        if(elementTitle[i].innerText === title){
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
        <div class="delete-product-car">
            <i class="fas fa-times-circle"></i>
        </div> 
    </div>  
    `;
    shoppingCartItemsContainer.innerHTML += shoppingCartContent;
}

/* funcion que inserta en el HTML del carrito el contenido cuando se recarga*/
function obtenerValoresDeCarrito(){
    if(carritoCompras != null){
    for(let carritoCompra of carritoCompras){
        addItemToShoppingCart(carritoCompra.nombre, carritoCompra.precio, carritoCompra.image)
    }    }
}
obtenerValoresDeCarrito();
