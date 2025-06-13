Let numero;
do {
    numero = prompt('Digite um numero 1 e 10:');
} while(numero < 1 || numero > 10);
console.log(`Você digitou o numero $ {numero}.`);