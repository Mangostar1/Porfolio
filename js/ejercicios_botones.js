var botonUno = document.getElementById("button_1");
var botonDos = document.getElementById("button_2");

botonUno.onclick = function One(clicked = false) {    
    clicked = true;    
    document.getElementById("calcula").style = "display: flex";
}

botonDos.onclick = function Two(clicked = false) {    
    clicked = true;    
    document.getElementById("item_2").style = "display: flex";
}