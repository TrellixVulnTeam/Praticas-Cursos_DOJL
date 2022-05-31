const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1);
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);


function criaPessoa(nome, sobrenome, idade) {
    return  {
        nome,
        sobrenome,
        idade
    };
}

const pessoa2 = criaPessoa('Maycon', 'Rocha', 28);
console.log(pessoa2);

const pessoa3 = {
    nome: 'Vagner',
    sobrenome: 'Anhaguera',

    fala () {
        console.log(`Olá ${this.nome} ${this.sobrenome}`);
    }
};

pessoa3.fala();