var botonUno = document.getElementById("button_1");
var botonDos = document.getElementById("button_2");

botonUno.onclick = function One() {    
    document.getElementById("calcula").style = "display: flex";
    document.getElementById("item_2").style = "display: none";
}

botonDos.onclick = function Two() {
    document.getElementById("calcula").style = "display: none";
    document.getElementById("item_2").style = "display: flex";
}