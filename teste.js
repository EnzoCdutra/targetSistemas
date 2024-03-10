function verificaFibonacci(numero) {
    let a = 0, b = 1, temp;

    while (b <= numero) {
        if (b === numero) {
            console.log('${numero} pertence à sequência de Fibonacci.');
            return;
        }

        temp = a + b;
        a = b;
        b = temp;
    }

    console.log('${numero} não pertence à sequência de Fibonacci.');
}

verificaFibonacci(13);

function inverteString(original) {
    let invertida = '';

    for (let i = original.length - 1; i >= 0; i--) {
        invertida += original[i];
    }

    console.log(invertida);
}

inverteString('Hello, World!');