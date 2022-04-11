/* btones */
let day = document.getElementById("day");
let week = document.getElementById("week");
let month = document.getElementById("month");

/* elementos contenedores */
let daily = document.getElementsByClassName("daily");
let weekly = document.getElementsByClassName("weekly");
let monthly = document.getElementsByClassName("monthly");

let hoursDay = document.getElementsByClassName("hours-daily");
let previDay = document.getElementsByClassName("previ-daily");

let hoursWeek = document.getElementsByClassName("hours-week");
let previWeek = document.getElementsByClassName("previ-week");

let hoursMonth = document.getElementsByClassName("hours-month");
let previMonth = document.getElementsByClassName("previ-month");


/* eventos click */

day.onclick = () => {
    for (let i = 0; i < 6; i++){
        weekly[i].style = "display: none";
        monthly[i].style = "display: none";
        daily[i].style = "display: flex";
    }
    async function horasEventosDiario() {
        const url = await fetch("http://127.0.0.1:5500/works/Frontend_mentor/time-tracking-dashboard-main/data.json");
        let json = await url.json();
    
        for (let i = 0; i <= 6; i++){
            hoursDay[i].innerHTML = json[i].timeframes.daily.current + " hrs";
            previDay[i].innerHTML = "Last Week - " + json[i].timeframes.daily.previous + " hrs";
        }
    }
    horasEventosDiario();
}

week.onclick = () => {
    for (let i = 0; i < 6; i++){
        monthly[i].style = "display: none";
        daily[i].style = "display: none";
        weekly[i].style = "display: flex";
    }
    async function horasEventosSemanal() {
        const url = await fetch("http://127.0.0.1:5500/works/Frontend_mentor/time-tracking-dashboard-main/data.json");
        let json = await url.json();
    
        for (let i = 0; i <= 6; i++){
            hoursWeek[i].innerHTML = json[i].timeframes.weekly.current + " hrs";
            previWeek[i].innerHTML = "Last Week - " + json[i].timeframes.weekly.previous + " hrs";
        }
    }
    horasEventosSemanal();
}

month.onclick = () => {
    for (let i = 0; i < 6; i++){
        weekly[i].style = "display: none";
        daily[i].style = "display: none";
        monthly[i].style = "display: flex";
    }
    async function horasEventosMensual() {
        const url = await fetch("http://127.0.0.1:5500/works/Frontend_mentor/time-tracking-dashboard-main/data.json");
        let json = await url.json();
    
        for (let i = 0; i <= 6; i++){
            hoursMonth[i].innerHTML = json[i].timeframes.monthly.current + " hrs";
            previMonth[i].innerHTML = "Last Month - " + json[i].timeframes.monthly.previous + " hrs";
        }
    }
    horasEventosMensual();
}