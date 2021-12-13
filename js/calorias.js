const envia = document.getElementById("enviar");
var respuesta = document.getElementById("resulta");


envia.onclick = function calculo() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var edad = document.getElementById("edad").value;

    var genero = document.getElementById("genero");

    var hombre = 66+(13.7*peso)+(5*altura)-(6.5*edad);
    var mujer = 655+(9.6*peso)+(1.8*altura)-(4.7*edad);

    if (genero.value == 1) {
        respuesta.value = hombre;
    } else {
        respuesta.value = mujer;
    }
}