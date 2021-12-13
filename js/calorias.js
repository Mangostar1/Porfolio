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

        if (document.getElementById("actividad_1").checked) {
            hombre *= 1.2;
        } else if (document.getElementById("actividad_2").checked) {
            hombre *= 1.375;
        } else if (document.getElementById("actividad_3").checked) {
            hombre *= 1.55;
        } else if (document.getElementById("actividad_4").checked) {
            hombre *= 1.725;
        } else {
            hombre *= 1.9;
        }
        respuesta.value = hombre;
        
    } else {

        if (document.getElementById("actividad_1").checked) {
            mujer *= 1.2;
        } else if (document.getElementById("actividad_2").checked) {
            mujer *= 1.375;
        } else if (document.getElementById("actividad_3").checked) {
            mujer *= 1.55;
        } else if (document.getElementById("actividad_4").checked) {
            mujer *= 1.725;
        } else {
            mujer *= 1.9;
        }
        respuesta.value = mujer;
    }
}