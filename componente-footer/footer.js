function agregarFooter (contenedor) {
    let codigo = ` 
        <footer class = 'footer'> 
            <img class = 'footer__logo' id = '#footerLogo'>
            <div class = 'footer__links'> 
                <div class = 'links__div'> 
                    <img class = 'div__icono' src = './images/home.svg'>
                    <p class = 'div__texto'> Home </p>
                </div>
                <div class = 'links__div'> 
                    <img class = 'div__icono' src = './images/servicios.svg'>
                    <p class = 'div__texto'> Servicios </p>
                </div>
                <div class = 'links__div'> 
                    <img class = 'div__icono' src = './images/contacto.svg'>
                    <p class = 'div__texto'> Contacto </p>
                </div>
            </div>
            <div class = 'footer__redes'> 
                <img class = 'redes__icono' src = './images/linkedin.svg'>
                <img class = 'redes__icono' src = './images/twitter.svg'>
                <img class = 'redes__icono' src = './images/github.svg'>
            </div>
            <p class = 'footer__p'> ©2022 - https://apx.school </p>
        </footer>`;
    contenedor.innerHTML = codigo 
};