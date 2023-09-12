traerDatos(iniciar);

function iniciar(events){
    mostrarTarjetas(events, contenedor)
    let categories = extraerCategories(events)
    extraerCategories(events)
    mostrarCheckboxes(categories, contenedorCategories)
    filtroFull()
}
