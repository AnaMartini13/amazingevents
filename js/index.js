const contenedor = document.getElementById("contenedor") 
const contenedorCategories = document.getElementById("categories")
const buscador = document.getElementById("buscador")
const lupa = document.getElementById("lupa")
const checkboxes = document.getElementsByClassName("form-check-input")

let categories = extraerCategories(data.events)

mostrarTarjetas(data.events, contenedor)
mostrarCheckboxes(categories, contenedorCategories)

contenedorCategories.addEventListener("change", filtroFull)
buscador.addEventListener("input", filtroFull)
lupa.addEventListener("click", filtroFull)

function crearTarjeta(elemento){
    return`<div class="col mb-3 justify-content-center">
    <div class="card mt-3 mb-3"> 
    <img src="${elemento.image}" class="img-fluid card-img-top">
    <div class="card-body">
        <h5 class="card-title fw-bold">${elemento.name}</h5>
        <p class="card-text">${elemento.description}</p>
        <div class="footer d-flex justify-content-between">
            <span class="PRICE px-4 py-2">PRICE: ${elemento.price}</span>
            <a href="./details.html?id=${elemento._id}" class="btn btn-primary">Details</a>
        </div>
    </div>
</div>
</div>`
}
 
function mostrarTarjetas(array, contenedor){
    if (array.length == 0){
        contenedor.innerHTML = `<p class="fs-3 text-center">No se encontraron eventos</p>`
        return
    }
    let html = ""
    array.forEach(elemento => {
        html += crearTarjeta(elemento)
    });
    contenedor.innerHTML = html
}

function crearCheckbox(dato){
    return `<div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="${dato}" value="${dato}">
    <label class="form-check-label" for="${dato}">${dato}</label>
</div>`
}

function mostrarCheckboxes(categories, contenedor){
    let html = ''
    categories.forEach(elemento => {
        html += crearCheckbox(elemento)
    })
    contenedor.innerHTML = html
}
 
function extraerCategories(array){
    return array.map(elemento => elemento.category).filter((category, indice, categories) => categories.indexOf(category) === indice)
}

function filtrarPorTexto(array, texto){
    return array = array.filter(elemento => elemento.name.toLowerCase().includes(texto.trim().toLowerCase()))
}

function filtrarCategories(array){
    let checkboxes = Array.from(document.getElementsByClassName("form-check-input"))
    let markedCheckboxes = checkboxes.filter(check => check.checked)
    if(markedCheckboxes.length == 0){
        return array
    }
    let valores = markedCheckboxes.map(markedCheckboxes => markedCheckboxes.value)
    if(valores.length == 0){
        return array
    }
    let arrayFiltrado = array.filter(elemento => valores.includes(elemento.category))
    return arrayFiltrado  
}

function filtroFull(){
    let filtro1 = filtrarCategories(data.events)
    let filtro2 = filtrarPorTexto(filtro1, buscador.value)
    mostrarTarjetas(filtro2, contenedor)
}
