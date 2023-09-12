let events = [];


function traerDatos(callback){
    fetch('https://mindhub-xj03.onrender.com/api/amazing')
        .then(response => response.json())
        .then(dataApi => {
            let events = dataApi.events
            let currentDate = dataApi.currentDate
            console.log(events);
        
        callback(events);
        })
    .catch(error => console.log(error)) 
}
    

let contenedor = document.getElementById("contenedor") 
let contenedorCategories = document.getElementById("categories")
let buscador = document.getElementById("buscador")
let lupa = document.getElementById("lupa")
let checkboxes = document.getElementsByClassName("form-check-input")

contenedorCategories.addEventListener("change", ()=> {filtroFull (events)})
buscador.addEventListener("input", ()=> {filtroFull (events)})
lupa.addEventListener("click", ()=> {filtroFull (events)})

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

function extraerCategories(events){
    return events.map(elemento => elemento.category).filter((category, indice, categories) => categories.indexOf(category) === indice)
}

function filtrarPorTexto(events, texto){
    console.log(events)
    let filtrado = events.filter(elemento => elemento.name.toLowerCase().includes(texto.trim().toLowerCase()))
    return filtrado
}

function filtrarCategories(events){
    let checkboxes = Array.from(document.getElementsByClassName("form-check-input"))
    let markedCheckboxes = checkboxes.filter(check => check.checked)
    if(markedCheckboxes.length == 0){
        return events
    }
    let valores = markedCheckboxes.map(markedCheckboxes => markedCheckboxes.value)
    if(valores.length == 0){
        return events
    }
    console.log(events)
    let arrayFiltrado = events.filter(elemento => valores.includes(elemento.category))
    return arrayFiltrado  
}

function filtroFull(events){
    let filtro1 = filtrarCategories(events)
    console.log(events)
    let filtro2 = filtrarPorTexto(filtro1, buscador.value)
    mostrarTarjetas(filtro2, contenedor)
}






