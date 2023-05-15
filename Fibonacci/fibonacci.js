'use strict';

let calcular = document.getElementById("calcular");
let apagar = document.getElementById("apagar");

calcular.addEventListener("click",fibonacci,false);
apagar.addEventListener("click",zerar,false);

function fibonacci(e) {

    let elementos = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    let aurea = document.getElementById("aurea");

        if (elementos <=0) {
            alert("Número inválido! Somente números maiores que 0 (zero).");
        } else {
            let fib1 = 1, fib2 = 0, fib3 = 0, fib = 0;
            let array = [];
            let array2 =[];
            for (let n = 0; n < elementos; n++) {
                array.push(fib3);
                fib3 = fib1 + fib2;
                fib = fib2/fib1;
                fib1 = fib2;
                fib2 = fib3;
                array2.push(fib);

            }

            resultado.innerHTML = array;
            aurea.innerHTML = array2;
        }
    }

function zerar(e) {

        document.getElementById("numero").value ="";
        document.getElementById("resultado").innerHTML ="";
        document.getElementById("aurea").innerHTML ="";
}


