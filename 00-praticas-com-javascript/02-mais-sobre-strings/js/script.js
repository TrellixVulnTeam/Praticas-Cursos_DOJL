//abrir string com aspas dupla dentro de uma variável tipo String 
let umaString = "Um \"texto\"";

console.log(umaString);

//as strings em js são indexaveis
let outraString = "Deus meu Deus";

console.log(outraString[0], outraString[1], outraString[2], outraString[3]);

//o JS disponibiliza diversas funções que podem ser acessadas utilizando o caracter '.'
console.log(outraString.charAt(3));

//formas de concatenar
console.log(outraString.concat(' ', 'é', ' ', 'bom', '!'));
console.log(outraString + ' é bom!');
console.log(`${outraString} é bom!`);

//identificar qual é o indice de um determinado item
console.log(outraString.indexOf('e')); //um unico parametro, pesquisa do início ao fim da string

console.log(outraString.indexOf('e', 2)); //dois parametros, pesquisa a partir do indice indicado no segundo parametro. Caso não exista o termno que está sendo buscado a partir do indice indicado no segundo parametro, irá retornar '-1'

console.log(outraString.lastIndexOf('e')); //mesma utilidade do indexOf, porém, inicia a busca de trás para frente na string

console.log(outraString.search(/u/)); //função semlhante ao indexOf, com a diferença que aceita funções regulares.

console.log(outraString.replace('Deus', 'Deus é sempre bom')); //pega o termo informado no primeiro parâmetro e substitui pelo termo do segundo parâmetro
console.log(outraString.replace(/Deus/, 'Deus é sempre bom')); //mesmo caso acima, mas utilizando funções regulares

let novaString = 'O rato roeu a roupa do rei de roma';

console.log(novaString.replace(/r/,'#')); //mesmo caso da função acima, utilizando funções regulares,mas substituindo apenas o primeiro indice  correspondente a busca.
console.log(novaString.replace(/r/g,'#')); //mesmo caso da função acima, utilizando funções regulares,mas substituindo todos os indices que correspondem a busca.

console.log(outraString.length); //retorna o tamanho da string

console.log(outraString.slice(0, 4)); //retorna nova string com intens informados no intervalo informado nos parâmetros
console.log(outraString.slice(-2));
console.log(outraString.slice(-4, -1)); //quando colocmaos o sinal negativo a busca é feita começando peelo final da string

console.log(outraString.split(' ')); //retorna uma array formadapela divisão da string. a string é dividida pelo caracter informado noparametro, nesse exemplo é caracter vazio.

console.log(outraString.toUpperCase()); //retornaa string com todos caracteres maiusculos