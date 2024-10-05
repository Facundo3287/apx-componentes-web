function agregarBg (contenedor, urlServiciosVector) {
    let codigo = `<section class = 'bg'> </section>` ;
    contenedor.innerHTML = codigo;
    contenedor.style.backgroundImage = `url(${urlServiciosVector})`
    contenedor.style.backgroundPosition = 'center';
    contenedor.style.backgroundSize = 'cover'
};