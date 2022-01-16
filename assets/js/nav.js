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
            <a href="#"><i class="fas fa-user"></i></a>
            <a href="#"><i class="fas fa-shopping-cart"></i></a> 
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