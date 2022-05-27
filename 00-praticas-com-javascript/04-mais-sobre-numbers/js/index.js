let num1 = 1; //number
let num2 = 2.5; //number
let num3 = 13.3423872837;
let num4 = 50;

let temp;

let num5 = 0.7;
let num6 = 0.1;

console.log(num1 + num2); //ira realizar a operacao de soma entre as duas variaveis

console.log(num1.toString() + num2); // utilizando toString nesse contexto, irá converter temporiariamente a variável num1 para string. Uma das variáveis sendo do tipo string não é realizada a operação de soma, mas sim a concatenacao.
console.log(typeof(num1)); // num1 continua sendo do tipo number

num1 = num1.toString();
console.log(num1, typeof(num1)); //converte permanentemente num1 para String

num1 = 150; 
num1 = num1.toString(2); //retorna representação binária, mas continua sendo uma string
console.log(num1, typeof(num1));

console.log(num3);
console.log(num3.toFixed(2)); //formata as casas decimais

console.log(Number.isInteger(num1)); //retorna se a variável é do tipo int ou não.
console.log(Number.isInteger(num2)); //retorna se a variável é do tipo int ou não.
console.log(Number.isInteger(num3)); //retorna se a variável é do tipo int ou não.
console.log(Number.isInteger(num4)); //retorna se a variável é do tipo int ou não.

temp = num4 * 'Olá'; //não é correto tentar realizar operacoes aritmeticas entre variaveis != number

console.log(temp, Number.isNaN(temp)); //retorna NaN

console.log(num5);

num5 += num6;
console.log(num5);
num5 += num6;
num5 += num6;
console.log(num5);

num5 = Number(num5.toFixed(2));

console.log(num5);