traerDatos(iniciar);

function iniciar(events){
    mostrarTarjetasUpcoming(events, contenedor)
    let categories = extraerCategories(events)
    extraerCategories(events)
    mostrarCheckboxes(categories, contenedorCategories)
    filtroFull()
}

function mostrarTarjetasUpcoming(events, contenedor){
    let tarjetas = ""
    for(elemento of events){
        if(elemento.date >= currentDate){
            tarjetas += crearTarjeta(elemento)
        }
    }
    contenedor.innerHTML = tarjetas
    if (events.length == 0){
        contenedor.innerHTML = `<p class="fs-3 text-center">No se encontraron eventos</p>`
        return
    }
}

function filtroFull(){
    let filtro1 = filtrarCategories(events)
    let filtro2 = filtrarPorTexto(filtro1, buscador.value)
    mostrarTarjetasUpcoming(filtro2, contenedor)
}
