const cardContainer = document.getElementById("cardContainer")


mostrarTarjetasUpcoming(data.events, cardContainer);


function mostrarTarjetasUpcoming(events, ubicacion){
    let tarjetas = ""
    for(evento of events){
        if(evento.date > "2023-01-01"){
            tarjetas += createCard(evento)
        }
    }
    ubicacion.innerHTML = tarjetas
}


function createCard(evento){
    return`<div class="col mb-3 justify-content-center">
    <div class="card mt-3 mb-3"> 
    <img src="${evento.image}" class="img-fluid card-img-top" alt="music_concert">
    <div class="card-body">
        <h5 class="card-title">${evento.name}</h5>
        <p class="card-text">${evento.description}</p>
        <div class="footer d-flex justify-content-between">
            <span class="PRICE px-4 py-2">PRICE: ${evento.price}</span>
            <a href="details.html" class="btn btn-primary">Details</a>
        </div>
    </div>
</div>
</div>`
}
            
