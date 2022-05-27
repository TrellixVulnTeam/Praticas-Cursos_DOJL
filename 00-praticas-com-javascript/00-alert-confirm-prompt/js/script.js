alert('Com a nossa mensagem');

confirm('Deseja realmente apagar?');

prompt('Digite o seu nome:');

const confirma = confirm('Deseja apagar');

console.log(confirma);

let num1 = prompt('Digite um número: ');
let num2 = prompt('Digite outro número: ');

console.log(num1, num2);

//tudo o que é retornado pela função prompt é no  formato String.

let resultado = num1+num2;

console.log(resultado);

//convertendo string em number float
num1 = parseFloat(num1);
num2 = parseFloat(num2);

resultado = num1+num2;

console.log(resultado);

alert(`O resultado foi: ${resultado}`);