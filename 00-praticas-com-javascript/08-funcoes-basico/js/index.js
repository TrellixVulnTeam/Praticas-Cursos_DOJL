function saudacao(nome) {
    console.log(`Bom dia ${nome}`);
}

saudacao('Deus');
saudacao('Paizinho');

function funcaoRetorno() {
    return 123456;
}

const variavel = funcaoRetorno();
console.log(variavel);

function saudacao2(nome) {
    return `Bom dia ${nome}`;
}

const variavel2 = saudacao2('Jesus');
console.log(variavel2);

function soma(x, y) {
    return x + y; //após a palavra return nada mais é executado.
}

console.log(soma(2, 2));

console.log(soma()); //se utilizo a função sem informar os parâmetros irá retornar um NaN

function soma2(x = 1, y = 1) { //dessa forma mesmo que não informe o parâmetro x e y já terão um valor pré-definido e não irá retornar um NaN
    return x + y;
}

console.log(soma2());

//posso criar uma variável que recebe uma funcção
const raiz = function  (n) { //conhecida como função anônima
    return n ** 0.5;
}; //nesse caso o ';' é obrigatório

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));