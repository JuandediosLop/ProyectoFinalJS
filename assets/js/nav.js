let createNav = () =>{
    let nav = document.getElementById("navbar");
    nav.innerHTML = `
    <div class="nav">
        <a href="index.html">Ventas <span>Plus</span></a>
        <div class="nav-items">
            <div class="search" >
                <input id="search" type="text" class="search-box" placeholder="Buscador de productos">
                <button class="search-btn" id="search-btn">Buscar</button>
            </div>
            <div>
                <ul class="options">
                    <li class="user">
                       <a> <i class="fas fa-user"></i></a>
                    </li>
                    <li class="submenu">
                       <a> <i class="fas fa-shopping-cart"></i></a>
                        <div id="carrito">
                            <p class="vacio">Carrito de compras</p>
                            <div class="lista-carrito" id="add-car-prodct">
                                                   
                            </div>
                            <div class="buttons-car">
                                <button class="vaciar-btn">vaciar</button>
                                <button class="ir-carrito-btn">ir a carrito</button>
                            </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"> <a href="index.html" class="link">Inicio</a></li>
        <li class="link-item"> <a href="#" class="link">Hombre</a></li>
        <li class="link-item"> <a href="#" class="link">Mujer</a></li>
        <li class="link-item"> <a href="#" class="link">Accesorios</a></li>
    </ul>
    `;
}
createNav();