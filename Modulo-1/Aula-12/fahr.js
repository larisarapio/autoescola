let celsius = 30;

celsius = converteFahrenheit(celsius);

function converteFahrenheit(celsius) {
    let resultado = (celsius*9/5) + 32;
    console.log(`Celsius: ${celsius} - Fahrenheit: ${resultado}`)
    return resultado;

}

