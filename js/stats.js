let highAss = []
let lowAss = []
let largCap = []

let datosTabla2 = []
let datosTabla3 = []


const tabla1 = document.querySelector('#tabla1')
const tabla2 = document.querySelector('#tabla2')
const tabla3 = document.querySelector('#tabla3')

traerDatos(hacerStats)

function hacerStats(events) {
            extraerTabla1(events)
            mostrarTabla1()
            extraerTabla2(events)
            mostrarTabla2()
            extraerTabla3(events)
            mostrarTabla3()
}

function extraerTabla1(events) {
    events.sort((a, b) => ((b.assistance * 100) / b.capacity) - ((a.assistance * 100) / a.capacity))
    highAss.push(events[0], events[1], events[2])

    events.sort((a, b) => ((a.assistance * 100) / a.capacity) - ((b.assistance * 100) / b.capacity))
    lowAss.push(events[0], events[1], events[2])

    events.sort((a, b) => b.capacity - a.capacity)
    largCap.push(events[0], events[1], events[2])

}

function mostrarTabla1() {
    let html = ''
    
    for (let i = 0; i < highAss.length; i++) {
        let highAssPercent = (highAss[i].assistance * 100) / (highAss[i].capacity)
        let lowAssPercent = (lowAss[i].assistance * 100) / (lowAss[i].capacity)
        html += `<tr>
                     <td>${highAss[i].name} (${highAssPercent.toFixed(2)}%</td>
                     <td>${lowAss[i].name} (${lowAssPercent.toFixed(2)}%</td>
                     <td>${largCap[i].name} (${largCap[i].capacity}) </td>
                 </tr>`
    }
    tabla1.innerHTML = html
}

function extraerTabla2(events){
    let categories = [...new Set(events.map(elemento => elemento.category))]
    console.table(categories);
    categories.forEach(category => {
        let fila = {
            category: category,
            revenue: 0,
            estimate: 0,
        }

        let sumaRevenue = 0
        let datosPorCategory = events.filter(elemento => (elemento.category == category)).filter(elemento => (elemento.estimate))
        datosPorCategory.forEach(elemento => {
            sumaRevenue+= (elemento.price * elemento.estimate)
        })
        fila.revenue = sumaRevenue

        let sumaPercentEst = 0
        let totalEstimate = 0
        let totalCapacity = 0
        datosPorCategory.forEach(elemento => {
            totalEstimate += elemento.estimate
            totalCapacity += elemento.capacity
            sumaPercentEst = ((totalEstimate * 100) / totalCapacity)
        })
        fila.estimate = sumaPercentEst

        datosTabla2.push(fila)
    })
    console.log();
}

function mostrarTabla2(){
    let html = ''
    datosTabla2.sort((a,b)=> b.revenue - a.revenue)
    datosTabla2.forEach(fila => html += `<tr>
                                            <td>${fila.category}</td>
                                            <td>$${fila.revenue}</td>
                                            <td>${fila.estimate.toFixed(2)}%</td>
                                        </tr>`
    )
    tabla2.innerHTML = html
}


function extraerTabla3(events){
    let categories = [...new Set(events.map(elemento => elemento.category))]
    console.table(categories);
    categories.forEach(category => {
        let fila = {
            category: category,
            revenue: 0,
            assistance: 0,
        }

        let sumaRevenue = 0
        let datosPorCategory = events.filter(elemento => (elemento.category == category)).filter(elemento => (elemento.assistance))
        datosPorCategory.forEach(elemento => {
            sumaRevenue+= (elemento.price * elemento.assistance)
        })
        fila.revenue = sumaRevenue

        let sumaPercentAss = 0
        let totalAss = 0
        let totalCapacity = 0
        datosPorCategory.forEach(elemento => {
            totalAss += elemento.assistance
            totalCapacity += elemento.capacity
            sumaPercentAss = ((totalAss * 100) / totalCapacity)
        })
        fila.assistance = sumaPercentAss

        datosTabla3.push(fila)
    })
    console.log();
}
function mostrarTabla3(){
    let html = ''
    datosTabla3.sort((a,b)=> b.revenue - a.revenue)
    datosTabla3.forEach(fila => html += `<tr>
                                            <td>${fila.category}</td>
                                            <td>$${fila.revenue}</td>
                                            <td>${fila.assistance.toFixed(2)}%</td>
                                        </tr>`
    )
    tabla3.innerHTML = html
}

