let carritoCompras= new Array(); 
const addToShoppingCartButtons= document.querySelectorAll('.add-btn');
const shoppingCartItemsContainer =  document.getElementById('add-car-prodct');

class Carrito{
    constructor(nombre, precio, image){
        this.nombre = nombre;
        this.precio = precio;
        this.image= image;
    }
}

function guardarStorage(clave, valor){
    localStorage.setItem(clave, JSON.stringify(valor));    
}

function obtenerStorage(clave){
    const valor = JSON.parse(localStorage.getItem(clave));
    return valor
}   

function recuperarArrayStorageParaCarrito(){
        carritoCompras = obtenerStorage('Productos')
}

recuperarArrayStorageParaCarrito(); 



addToShoppingCartButtons.forEach(addToCartButton=> {
        addToCartButton.addEventListener('click', addtoCartClicked)
});

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

function addItemToShoppingCart(title, price, image){

    const shoppingCartContent = `
    <div class="content-product-car">
        <div class="producto-carrito">
            <img src=${image} height="70px">
        </div>
        <div class="product-info-car">
            <div class="name-product-car">
                <p>${title}</p>
            </div>
            <div class="price-product-car">
                <p class="precioActual">${price}</p>
                <p class="precioNormal">$400</p>
            </div>   
        </div>
        <div class="delete-product-car">
            <i class="fas fa-times-circle"></i>
        </div> 
    </div>  
    `;
    shoppingCartItemsContainer.innerHTML += shoppingCartContent;

}

function obtenerValoresDeCarrito(){
    if(carritoCompras != null){
    for(let carritoCompra of carritoCompras){
        addItemToShoppingCart(carritoCompra.nombre, carritoCompra.precio, carritoCompra.image)
    }    }
}
obtenerValoresDeCarrito();
