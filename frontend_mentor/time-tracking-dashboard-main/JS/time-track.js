let daily = document.getElementsByClassName("daily");
let weekly = document.getElementsByClassName("weekly");
let monthly = document.getElementsByClassName("monthly");

let day = document.getElementById("day");
let week = document.getElementById("week");
let month = document.getElementById("month");

day.onclick = () => {
    weekly[0].style = "display: none";
    monthly[0].style = "display: none";
    daily[0].style = "display: flex";
    
    weekly[1].style = "display: none";
    monthly[1].style = "display: none";
    daily[1].style = "display: flex";

    weekly[2].style = "display: none";
    monthly[2].style = "display: none";
    daily[2].style = "display: flex";

    weekly[3].style = "display: none";
    monthly[3].style = "display: none";
    daily[3].style = "display: flex";

    weekly[4].style = "display: none";
    monthly[4].style = "display: none";
    daily[4].style = "display: flex";

    weekly[5].style = "display: none";
    monthly[5].style = "display: none";
    daily[5].style = "display: flex";
}

week.onclick = () => {
    monthly[0].style = "display: none";
    daily[0].style = "display: none";
    weekly[0].style = "display: flex";
    
    monthly[1].style = "display: none";
    daily[1].style = "display: none";
    weekly[1].style = "display: flex";

    monthly[2].style = "display: none";
    daily[2].style = "display: none";
    weekly[2].style = "display: flex";

    monthly[3].style = "display: none";
    daily[3].style = "display: none";
    weekly[3].style = "display: flex";

    monthly[4].style = "display: none";
    daily[4].style = "display: none";
    weekly[4].style = "display: flex";

    monthly[5].style = "display: none";
    daily[5].style = "display: none";
    weekly[5].style = "display: flex";
}

month.onclick = () => {
    weekly[0].style = "display: none";
    daily[0].style = "display: none";
    monthly[0].style = "display: flex";
    
    weekly[1].style = "display: none";
    daily[1].style = "display: none";
    monthly[1].style = "display: flex";

    weekly[2].style = "display: none";
    daily[2].style = "display: none";
    monthly[2].style = "display: flex";

    weekly[3].style = "display: none";
    daily[3].style = "display: none";
    monthly[3].style = "display: flex";

    weekly[4].style = "display: none";
    daily[4].style = "display: none";
    monthly[4].style = "display: flex";

    weekly[5].style = "display: none";
    daily[5].style = "display: none";
    monthly[5].style = "display: flex";
}