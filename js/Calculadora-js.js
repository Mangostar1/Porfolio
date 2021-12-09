const nueve = document.getElementById("9");
nueve.onclick = function nueve() {
    document.calculadora.resultado.value += 9;
}

const ocho = document.getElementById("8");
ocho.onclick = function ocho() {
    document.calculadora.resultado.value += "8";
}

const siete = document.getElementById("7");
siete.onclick = function siete() {
    document.calculadora.resultado.value += 7;
}

const seis = document.getElementById("6");
seis.onclick = function seis() {
    document.calculadora.resultado.value += 6;
}

const cinco = document.getElementById("5");
cinco.onclick = function cinco() {
    document.calculadora.resultado.value += 5;
}

const cuatro = document.getElementById("4");
cuatro.onclick = function cuatro() {
    document.calculadora.resultado.value += 4;
}

const tres = document.getElementById("3");
tres.onclick = function tres() {
    document.calculadora.resultado.value += 3;
}

const dos = document.getElementById("2");
dos.onclick = function dos() {
    document.calculadora.resultado.value += 2;
}

const uno = document.getElementById("1");
uno.onclick = function uno() {
    document.calculadora.resultado.value += 1;
}

const cero = document.getElementById("0");
cero.onclick = function cero() {
    document.calculadora.resultado.value += 0;
}

const suma = document.getElementById("suma");
suma.onclick = function suma() {
    document.calculadora.resultado.value += "+";
}

const resta = document.getElementById("resta");
resta.onclick = function resta() {
    document.calculadora.resultado.value += "-";
}

const divicion = document.getElementById("divicion");
divicion.onclick = function divicion() {
    document.calculadora.resultado.value += "/";
}

const multipli = document.getElementById("multiplicacion");
multipli.onclick = function multipli() {
    document.calculadora.resultado.value += "*";
}

var igualar = document.getElementById("igual");
igualar.onclick = function igualar() {
    document.calculadora.resultado.value = eval(document.calculadora.resultado.value);
}

/* let resultado = document.getElementById("resultados"); */