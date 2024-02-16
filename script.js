function fibonacci(n) {
    let fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    return fibArray;
}

function validarNumero(input) {
    return !isNaN(input) && isFinite(input) && input > 0 && Number.isInteger(input);
}

function obtenerNumero() {
    let numero;
    do {
        numero = prompt("Ingrese un número entero positivo para generar la serie de Fibonacci:");
        numero = parseInt(numero);
    } while (!validarNumero(numero));
    return numero;
}

function imprimirSerieFibonacci() {
    let numero = obtenerNumero();
    let serie = fibonacci(numero);
    confirm("Serie de Fibonacci para " + numero + " números:"+ serie.join(", "));
}

imprimirSerieFibonacci();
