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

        // FORMULARIO 
        let contenedorButtom = document.getElementById('#Contenedorform');
        agregarButtom(contenedorButtom);
        enviarForm();

        // FOOTER
        let contenedorFooter = document.getElementById('#contenedorFooter');
        agregarFooter(contenedorFooter);
        document.getElementById('#footerLogo').setAttribute('src', urlNavLogo);
    });
};

main()