const alunos = ['João', 'Maria', 'Analine'];

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

alunos[0] = 'Eduardo';

console.log(alunos);

alunos[3] = 'Luiza';

console.log(alunos);

console.log(alunos.length);

alunos[alunos.length] = 'Teo'; //forma de adicionar elementos ao final do array

console.log(alunos);

alunos[alunos.length] = 'Karina';
alunos[alunos.length] = 'Larissa';
alunos[alunos.length] = 'Luane';

console.log(alunos);

alunos.push('Marcelo'); //outra forma de adicionar elementos ao final do array

console.log(alunos);

alunos.unshift('Mirella'); //forma de adicionar elemtntos no início do array;

console.log(alunos);

alunos.pop() //forma de remover um elemento do final do array;

console.log(alunos);

let removido = alunos.pop() //armazena o elemento removido do aray através do método .pop().
console.log(removido);
console.log(alunos);

alunos.shift(); //forma de remover um elemento do início do array.

console.log(alunos);

delete alunos[4];

console.log(alunos);

console.log(alunos[38]);

console.log(alunos.slice(0, 3));

console.log(typeof(alunos)); //arrays são do tipo objeto no JS

console.log(alunos instanceof Array); //verifica se realmente estamos trabalhando com array