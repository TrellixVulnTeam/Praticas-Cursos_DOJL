let num1 = 9.34564;

let num2;

num2 = Math.floor(num1); //arredonda o numero para baixo
console.log(num2);

num2 = Math.ceil(num1); //arredonda o numero para cima
console.log(num2);

num2 = Math.round(num1); //arredonda o numero automaticamente para cima ou para baixo, o que estiver mais próximo.
console.log(num2);

num2 = Math.max(0, 1, 4, 5, 7, 50, 8, 10, 11, 13); //retorna o maior número
console.log(num2);

num2 = Math.min(0, 1, 4, 5, 7, 50, 8, 10, 11, 13); //retorna o menor número
console.log(num2);

num2 = Math.random(); //retorna um número aleatório
console.log(num2);

const aleatorio1 = Math.random();
console.log(aleatorio1);

const aleatorio2 = Math.random() * (10 - 5) + 5; //(max - min) //retorna um numero aleatorio entre 5 e 10
console.log(aleatorio2);

const aleatorio3 = Math.round(Math.random() * (10 - 5) + 5); //(max - min) //retorna um numero aleatorio entre 5 e 10 arredondado
console.log(aleatorio3);

console.log(Math.PI); // retrona vaor de PI

console.log(Math.pow(2, 10)); // potencia

console.log(25 ** 0.5); // raiz quadrada

console.log(1000 / 0), typeof(1000/0); //em JS é possível dividir um numero por zero, temos como retorno um tipo infinity

