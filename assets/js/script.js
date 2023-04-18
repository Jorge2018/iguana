/*alert("Estoy ejecutando la función alert");
console.log("Estoy ejecutando la función console.log");*/

function calculadora(operacion, oper1, oper2) {
    switch (operacion) {
        case "+":
            var resultado1 = Number(oper1) + Number(oper2);
            break;
        case "-":
            var resultado1 = Number(oper1) - Number(oper2);
            break;
        case "*":
            var resultado1 = Number(oper1) * Number(oper2);
            break;
        case "/":
            if (oper2 == "0") {
                var resultado1 = "Ingreso un divisor igual a cero.....adios";
            } else {
                var resultado1 = Number(oper1) / Number(oper2);
            }
            break;
        default:
            var resultado1 = "Mi calculadora no hace lo especificado....lo siento!!";
    }
    return resultado1;
}

function mostrarResultado(mensaje) {

    alert("El mensaje es: " + mensaje);
}