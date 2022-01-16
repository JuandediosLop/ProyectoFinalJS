const items = document.getElementById("product-container");
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', ()=>{
    fetchData();
})

const fetchData = async ()=>{
    try {
        const res = await fetch('productos.json');
        const data = await res.json();
        escribirCards(data);

    } catch (error) {
        console.log("error");
    }
}

const escribirCards = data =>{
    data.forEach(producto => {
        templateCard.getElementByClass("product-brand").textContent = producto.nombre;

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    items.appendChild(fragment);
}

/*
const productos = [

    {
        "id": 1,
        "tipo":"Vestido",
        "genero": "mujer",
        "nombre":"Vestido turquesa",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":30,
        "stock":"si",
        "cantidad":25,
        "foto":"./assets/img/card1.png"
    },
    {
        "id": 2,
        "tipo":"Playera",
        "genero": "hombre",
        "nombre":"Camiseta gris",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":100,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card2.png"
    },
    {
        "id": 3,
        "tipo":"sueter",
        "genero": "hombre",
        "nombre":"Sueter hueso",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":250,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card3.png"
    },
    {
        "id": 4,
        "tipo":"Vestido",
        "genero": "mujer",
        "nombre":"Vestido Casual",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":120,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card4.png"
    },
    {
        "id": 5,
        "tipo":"Playera",
        "genero": "hombre",
        "nombre":"Playera negra",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":120,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card5.png"
    },
    {
        "id": 6,
        "tipo":"Camisa",
        "genero": "hombre",
        "nombre":"Camisa negra",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":120,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card6.png"
    },
    {
        "id": 7,
        "tipo":"playera",
        "genero": "hombre",
        "nombre":"playera botones",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":120,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card7.png"
    },
    {
        "id": 8,
        "tipo":"camisa",
        "genero": "hombres",
        "nombre":"camisa larga",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":120,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card8.png"
    },
    {
        "id": 9,
        "tipo":"zapatos",
        "genero": "hombre",
        "nombre":"Nike Negro",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":120,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card9.png"
    },
    {
        "id": 10,
        "tipo":"zapatos",
        "genero": "mujer",
        "nombre":"HFX deportivo",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":120,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card10.png"
    },
    {
        "id": 11,
        "tipo":"zapatos",
        "genero": "mujer",
        "nombre":"Tenis gris",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":120,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card11.png"
    },
    {
        "id": 12,
        "tipo":"zapatos",
        "genero": "hombre",
        "nombre":"Tenis negro",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":120,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card12.png"
    }
];
*/