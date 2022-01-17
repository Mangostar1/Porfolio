/* btones */
let day = document.getElementById("day");
let week = document.getElementById("week");
let month = document.getElementById("month");
/* elementos contenedores */
let daily = document.getElementsByClassName("daily");
let weekly = document.getElementsByClassName("weekly");
let monthly = document.getElementsByClassName("monthly");

let hours = document.getElementsByClassName("hours");
let previ = document.getElementsByClassName("previ");


/* display: flex por defecto */

for (let i = 0; i < 6; i++){
    weekly[i].style = "display: none";
    monthly[i].style = "display: none";
    daily[i].style = "display: flex";
}

/* eventos click */

day.onclick = () => {
    for (let i = 0; i < 6; i++){
        weekly[i].style = "display: none";
        monthly[i].style = "display: none";
        daily[i].style = "display: flex";
    }
}

week.onclick = () => {
    for (let i = 0; i < 6; i++){
        monthly[i].style = "display: none";
        daily[i].style = "display: none";
        weekly[i].style = "display: flex";
    }
}

month.onclick = () => {
    for (let i = 0; i < 6; i++){
        weekly[i].style = "display: none";
        daily[i].style = "display: none";
        monthly[i].style = "display: flex";
    }
}

/* pruebas */

async function horasEventosDiario() {
    const url = await fetch("http://127.0.0.1:5500/frontend_mentor/time-tracking-dashboard-main/data.json");
    let json = await url.json();

    document.getElementById("hour-day-work").innerHTML = json[0].timeframes.daily.current + " hrs";
    document.getElementById("previD-work").innerHTML = json[0].timeframes.daily.previous + " hrs";
}

horasEventosDiario();