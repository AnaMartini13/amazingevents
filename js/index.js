const cardContainer = document.getElementById("cardContainer")


mostrarTarjetas(data.events, cardContainer);


function mostrarTarjetas(events, ubicacion){
    let tarjetas = ""
    for(evento of events){
        tarjetas += createCard(evento)
    }
    ubicacion.innerHTML = tarjetas
}


function createCard(card){
    return`<div class="col mb-3 justify-content-center">
    <div class="card mt-3 mb-3"> 
    <img src="${card.image}" class="img-fluid card-img-top" alt="music_concert">
    <div class="card-body">
        <h5 class="card-title">${card.name}</h5>
        <p class="card-text">${card.description}</p>
        <div class="footer d-flex justify-content-between">
            <span class="PRICE px-4 py-2">PRICE: ${card.price}</span>
            <a href="details.html" class="btn btn-primary">Details</a>
        </div>
    </div>
</div>
</div>`
}
            
