'use strict';

let apagar = document.getElementById("apagar");
apagar.addEventListener("click",zerar,false);

function isPrimo(num) {
    if (num <= 1) {
        return false;
    }
  
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
          }
    }
    return true;
}

function encontrarPrimos() {
    var numero = parseInt(document.getElementById("numero").value);
    var primos = [];

      if (isNaN(numero) || numero <= 1) {
          alert("Número inválido! Somente números maiores que 0 (zero).");
          return;
      }

     for (var i = 2; i <= numero; i++) {
         if (isPrimo(i)) {
          primos.push(i);
        }
      }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Os números primos até " + numero + " são: " + primos.join(", ");
}

function zerar(e) {

  document.getElementById("numero").value ="";
  document.getElementById("resultado").innerHTML ="";
}