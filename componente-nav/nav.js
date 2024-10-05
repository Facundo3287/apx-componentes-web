function agregarNav (contenedor, urlNavLogo, urlIconoOpen, urlIconoClose) {
    let codigo = ` 
        <header class = 'header'>
            <img class = 'header__logo' src = ${urlNavLogo}>
            <img class = 'header__bars' src = ${urlIconoOpen}>
            <div class = 'header__menu'>
                <img class = 'menu__bars' src = ${urlIconoClose}>
                <a class = 'menu__texto' href = './index.html'> Portafolio </a>
                <a class = 'menu__texto' href = './portafolio.html'> Servicios </a>
                <a class = 'menu__texto' href = './contacto.html'> Contacto </a>
            </div>
            <div class = 'header__contenedor'>
                <a class = 'contenedor__texto' href = './index.html'> Portafolio </a>
                <a class = 'contenedor__texto' href = './portafolio.html'> Servicios </a>
                <a class = 'contenedor__texto' href = './contacto.html'> Contacto </a>
            </div>
        </header>`;
    contenedor.innerHTML = codigo 
};

function manejarMenu () {
    let barsOpen = document.querySelector('.header__bars');
    let menu = document.querySelector('.header__menu');
    let barsClose = document.querySelector('.menu__bars');
    barsOpen.addEventListener('click', () => { menu.style.display = 'flex' } );
    barsClose.addEventListener('click', () => { menu.style.display = 'none' } ) 
};
