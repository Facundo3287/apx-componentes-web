function agregarButtom (contenedor) {
    let codigo = `<input class = 'section__buttom' type = 'submit' value = 'Enviar'>` ;
    //contenedor.innerHTML = codigo 
    contenedor.innerHTML = contenedor.innerHTML.concat(codigo);


};