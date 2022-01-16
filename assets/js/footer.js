let createFooter = () =>{
    let footer = document.getElementById("footer");
    footer.innerHTML =`
    <div class="footer-content">
        <div class="footer-container">
            <a class="logo">Ventas <span>plus</span></a>
        </div>
        <div class="footer-container">
            <p class="footer-title">
                Acerca de la compañia
            </p>

            <p class="info"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dignissimos dolorem quia magni cupiditate, praesentium aliquid eum recusandae debitis aperiam perferendis est dolore explicabo beatae deserunt, ex reprehenderit sit eligendi doloremque. Perspiciatis iusto dignissimos delectus beatae porro debitis alias placeat possimus impedit blanditiis quaerat, nisi, quod reiciendis et omnis rerum quo id quis dicta accusantium. Doloribus tempore quibusdam iure eveniet nobis, eius distinctio tenetur eligendi blanditiis corporis repellat, esse inventore rerum ullam labore accusamus quasi voluptas sint ex repudiandae possimus, voluptates modi consequuntur! Praesentium deleniti alias ipsa. Corrupti repellendus sequi aut tempora, reprehenderit aspernatur, vel velit provident non, doloribus blanditiis?</p>
        </div>
    
    </div>


    <p class="info"> support emails - help@ventasplus.com, customersupport@ventasplus.com</p>
    
    <p class="info">telephone - 7882 0001, 7882 0002</p>

    <div class="footer-social-container">
        <div>
            <a href="" class="social-link">terms & services</a>
            <a href="" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="" class="social-link">instragram</a>
            <a href="" class="social-link">facebook</a>
            <a href="" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">
        VENTAS PLUS, la mejor tienda online de ropa
    </p>
    `;
}

createFooter();