const obtenerProducID = document.getElementById("product-container-result");
const boton = document.getElementById("search-btn");
const obtenerDatos= document.getElementById("search");


const borrarContenidosHijos= (idBorrar)=>{
    while (idBorrar.firstChild) {
        idBorrar.removeChild(idBorrar.lastChild);
      }
}

const filtrar = ()=>{
   
    borrarContenidosHijos(obtenerProducID);
    escribirResultadoBusqueda("nombre");
    noEncontrado();

} 


const escribirResultadoBusqueda = (tipoBusqueda) => {

    const texto = obtenerDatos.value.toLowerCase();
    
    if(texto==''){
        obtenerProducID.innerHTML +=`
        <h2 class="product-category">
                Campo vacio
        </h2>
        `
        return;
    }

    if(tipoBusqueda=="nombre"){
        for(let producto of productos){
            let nombre = producto.nombre.toLowerCase();
            if(nombre.indexOf(texto) !== -1){
                obtenerProducID.innerHTML += ` 
                <div class="product-card">
                    <div class="product-image">
                        <span class="discount-tag">
                            50% off
                        </span>
                        <img src="${producto.foto}" class="product-thumb" alt="">
                        <button class="card-btn">
                            Más información
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
    }
}

const noEncontrado = () =>{
    
    if(obtenerProducID.innerHTML===''){
        borrarContenidosHijos(obtenerProducID);
        obtenerProducID.innerHTML += ` 
            <h2 class="product-category">
                Producto No encontrado
            </h2>
            `;
    }
}


boton.addEventListener('click', filtrar);