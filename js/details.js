const contenedor = document.getElementById("contenedor") 

let parametros = new URLSearchParams(window.location.search)
let id = parametros.get("id")
let evento = buscarEvento(id)

mostrarTarjeta(evento, contenedor)

function crearTarjeta(evento){
  return `<div class="card p-0 m-3" style="width: 800px;">
  <div class="row gap-0">
      <div class="col-md-6 p-0">
        <img src="${evento.image}"
            class="img-fluid rounded-3">
      </div>
      <div class="col-md-6 p-0">
          <div class="card-body">
            <h3 class="card-title fw-bold">${evento.name}</h3>
            <h4>${evento.date}</h4>
            <p class="card-text pt-3">${evento.description}</p>
      <div class="footer d-flex justify-content-between">
            <span class="px-54 py-3"><strong>PRICE: </strong>${evento.price}</span>
            <span class="px-4 py-3"><strong>PLACE: </strong>${evento.place}</span>
          </div>
      </div>
  </div>
  </div>`
} 

function mostrarTarjeta(evento, contenedor){
  contenedor.innerHTML = crearTarjeta(evento)
}

function buscarEvento(id){
  return data.events.find(evento => evento._id == id)
}


