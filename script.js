
function soma(){
    let valorN = parseFloat(document.querySelector("#valor1").value);
    let valorN2 = parseFloat(document.querySelector("#valor2").value);
    mostrarResultado(valorN + valorN2);
}

// function subtracao(){
//     let valorN = parseFloat(document.querySelector("#valor1").value);
//     let valorN2 = parseFloat(document.querySelector("#valor2").value);
//     mostrarResultado(valorN - valorN2);
// }

function multiplicacao(){
    let valorN = parseFloat(document.querySelector("#valor1").value);
    let valorN2 = parseFloat(document.querySelector("#valor2").value);
    mostrarResultado(valorN * valorN2);
}

function divisao(){
    let valorN = parseFloat(document.querySelector("#valor1").value);
    let valorN2 = parseFloat(document.querySelector("#valor2").value);

    if (valorN2 == 0) {
        mostrarResultado("Erro: Divisão por zero");
        return;
    }

    mostrarResultado(valorN / valorN2);
}

function mostrarResultado(valor){
    document.querySelector("#resultado").innerHTML = "Resultado: " + valor;
}
