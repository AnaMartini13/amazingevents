traerDatos(iniciar);

function iniciar(events){
    console.log(events)
    mostrarTarjetas(events, contenedor)
    let categories = extraerCategories(events)
    extraerCategories(events)
    mostrarCheckboxes(categories, contenedorCategories)
    filtroFull(events)
}
