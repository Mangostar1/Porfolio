const nueve = document.getElementById("9");
nueve.onclick = () => document.calculadora.resultado.value += 9;

const ocho = document.getElementById("8");
ocho.onclick = () => document.calculadora.resultado.value += 8;

const siete = document.getElementById("7");
siete.onclick = () => document.calculadora.resultado.value += 7;

const seis = document.getElementById("6");
seis.onclick = () => document.calculadora.resultado.value += 6;

const cinco = document.getElementById("5");
cinco.onclick = () => document.calculadora.resultado.value += 5;

const cuatro = document.getElementById("4");
cuatro.onclick = () => document.calculadora.resultado.value += 4;

const tres = document.getElementById("3");
tres.onclick = () => document.calculadora.resultado.value += 3;

const dos = document.getElementById("2");
dos.onclick = () => document.calculadora.resultado.value += 2;

const uno = document.getElementById("1");
uno.onclick = () => document.calculadora.resultado.value += 1;

const cero = document.getElementById("0");
cero.onclick = () => document.calculadora.resultado.value += 0;

const suma = document.getElementById("suma");
suma.onclick = () => document.calculadora.resultado.value += "+";

const resta = document.getElementById("resta");
resta.onclick = () => document.calculadora.resultado.value += "-";

const divicion = document.getElementById("divicion");
divicion.onclick = () => document.calculadora.resultado.value += "/";

const multipli = document.getElementById("multiplicacion");
multipli.onclick = () => document.calculadora.resultado.value += "*";

const coma = document.getElementById("coma");
coma.onclick = () => document.calculadora.resultado.value += ".";

const igualar = document.getElementById("igual");
igualar.onclick = () => {
    if (document.calculadora.resultado.value == "") {
    } else {
        document.calculadora.resultado.value = eval(document.calculadora.resultado.value);
    }
};