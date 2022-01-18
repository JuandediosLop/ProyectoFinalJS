const productsCont = document.getElementById("product-container");

const addProducts = ()=>{

    for(let producto of productos){
            productsCont.innerHTML += ` 
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">
                        50% off
                    </span>
                    <img src="${producto.foto}" class="product-thumb" alt="">
                    <button class="card-btn add-btn" id="button-add">
                        Añadir al carrito
                    </button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">${producto.nombre}</h2>
                    <p class="product-short-des">${producto.descripcionCorta}</p>
                    <span class="price">$${producto.precio}</span>
                    <span class="actual-price">$240</span>
                </div>

        </div>
            `;

    }
}

addProducts();