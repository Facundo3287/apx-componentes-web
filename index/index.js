function enviarForm () {
    let form = document.getElementById('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let url = 'https://apx.school/api/utils/email-to-student';
        let body = { 
            "to" : e.target[1].value, 
            "message" : e.target[2].value };
        let config = {
            method : "POST",
            headers : { "content-type": "application/json" },
            body : body };
        fetch(url, config);
    })
}

function main () {
    const url = 'https://cdn.contentful.com/spaces/m8wmlluwcelx/environments/master/entries?access_token=CjleO17cf8qiJ8j-otZJOaBGCqnTYPINWdpiPu8S4t0';
    fetch(url)
    .then( res => { return res.json() } )
    .then( data => { 

        // NAVEGADOR
        
        let contenedorHeader = document.querySelector('.contenedor__header');
        let urlNavLogo = 'http:' + data.includes.Asset[6].fields.file.url;
        let urlIconoOpen = 'http:' + data.includes.Asset[1].fields.file.url;
        let urlIconoClose = 'http:' + data.includes.Asset[0].fields.file.url;
        agregarNav(contenedorHeader, urlNavLogo, urlIconoOpen, urlIconoClose);
        manejarMenu();

        // MENU
    
        let mainSticker = document.getElementById('#mainSticker');
        let urlMainSticker = 'http:' + data.includes.Asset[4].fields.file.url;
        mainSticker.setAttribute('src', urlMainSticker);

        // PRESENTACION

        let presentacionTitulo = document.getElementById('#presentacionTitulo');
        let presentacionDescripcion = document.getElementById('#presentacionDescripcion');
        let presentacionSticker = document.getElementById('#presentacionSticker');
        let urlPresentacionSticker = 'http:' + data.includes.Asset[2].fields.file.url;
        presentacionTitulo.textContent = data.items[0].fields.presentacionTitulo;
        presentacionDescripcion.textContent = data.items[0].fields.presentacionDescripcion;
        presentacionSticker.setAttribute('src', urlPresentacionSticker);
       
        // SERVICIOS

        let contenedorBg = document.querySelector('.contenedor__bg');
        let urlServiciosVector = 'http:' + data.includes.Asset[3].fields.file.url;
        agregarBg(contenedorBg, urlServiciosVector);
        
        let bg = document.querySelector('.bg');
        let objetoCard = {
            'backend': ['http:' + data.includes.Asset[7].fields.file.url, data.items[0].fields.serviciosTituloBackend, data.items[0].fields.serviciosDescripcionBackend],
            'frontend' : ['http:' + data.includes.Asset[9].fields.file.url, data.items[0].fields.serviciosTituloFrontend, data.items[0].fields.serviciosDescripcionFrontend],
            'ingles': ['http:' + data.includes.Asset[5].fields.file.url, data.items[0].fields.serviciosTituloIngles, data.items[0].fields.serviciosDescripcionIngles] }
        agregarCard(bg, objetoCard);
    
        // FORMULARIO 

        let contenedorButtom = document.getElementById('#Contenedorform');
        agregarButtom(contenedorButtom);
        enviarForm();

        // FOOTER

        let contenedorFooter = document.getElementById('#contenedorFooter');
        agregarFooter(contenedorFooter);
        document.getElementById('#footerLogo').setAttribute('src', urlNavLogo);
    });
}


main();
