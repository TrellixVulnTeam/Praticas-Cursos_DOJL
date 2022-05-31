/*
    Primitivos(imutaveis): number, string, bolean, undefined, null, bigint, symbol.

    Referência(mutáveis): array, objects, function
*/

let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0], nome);

let a = 'A';
let b = a; //cópia

a = 'B';

console.log(b); //o valor da variável 'b' continua com seu valor inicial mesmo após de alterarmos o valor da variável 'a'.

let c = [1, 2, 3];
let d = c; //nesse caso tanto 'c' quanto 'd irão apontar para o mesmo local de memória

console.log(d);

c.push(4); //como apontam para o mesmo local da memória, a alteração em um deles irá afetar os dois.
console.log(d);

d.push(5);
console.log(c);

let e = [4, 5, 6];
let f = [...e]; //dessa forma eu realmente copio os valores contidos em 'e', e não somente a referencia da memória, fazendo com que as variáveis fiquem idependentes.

console.log(f);

e.push(7); //a alteração em 'e' não afeta 'f'
console.log(f);


