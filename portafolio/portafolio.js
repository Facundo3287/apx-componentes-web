function main () {
    const url = 'https://cdn.contentful.com/spaces/m8wmlluwcelx/environments/master/entries?access_token=CjleO17cf8qiJ8j-otZJOaBGCqnTYPINWdpiPu8S4t0';
    fetch(url)
    .then( res => { return res.json() } )
    .then( data => { 
        console.log(data);

        // NAV
        let urlNavLogo = 'http:' + data.includes.Asset[6].fields.file.url;
        let urlIconoOpen = 'http:' + data.includes.Asset[1].fields.file.url;
        let urlIconoClose = 'http:' + data.includes.Asset[0].fields.file.url;
        let contenedorNav = document.getElementById('#contenedorNav');
        agregarNav(contenedorNav, urlNavLogo, urlIconoOpen, urlIconoClose);
        manejarMenu();

        // MAIN
        let mainSticker = document.getElementById('#mainSticker');
        let mainTitilo = document.getElementById('#mainTitulo');
        let urlMainSticker = 'http:' + data.includes.Asset[8].fields.file.url;
        mainSticker.setAttribute('src', urlMainSticker);
        let titulo = data.items[0].fields.portafolioTitulo.slice(0,3);
        let spam = data.items[0].fields.portafolioTitulo.slice(4,13);
        let codigo = `${titulo} <br> <span class = 'item__spam'> ${spam} </span> `;
        mainTitilo.innerHTML = codigo;

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

        // FOOTER
         let contenedorFooter = document.getElementById('#contenedorFooter');
         agregarFooter(contenedorFooter);
         document.getElementById('#footerLogo').setAttribute('src', urlNavLogo);
    } );

}

main()