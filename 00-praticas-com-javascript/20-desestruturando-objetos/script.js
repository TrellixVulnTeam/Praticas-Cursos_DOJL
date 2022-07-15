let pessoa = {
    nome: 'Maycon',
    sobrenome: 'Rocha',
    idade: 28,
    social: {
        instagram: {
            url: '@_mayconrocha_',
            numero_seguidores: 5000,
        }, 
        linkedin: 'minrocha',
    },
}

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;
// let instagram = pessoa.social.instagram;
// let linkedin = pessoa.social.linkedin;
// let nomeCompleto = pessoa.nomeCompleto();

//a forma a cima pode ser substituida pela forma a seguir

let { nome, sobrenome, idade = 15 } = pessoa; //adicionamos um valor padrao para idade, esse valor somente será caso o atibuto não tenha nunhum outro valor.

let { instagram, linkedin} = pessoa.social;

// let { nome, sobrenome, idade, social: { instagram, linkedin} } = pessoa; //forma opcional

console.log(nome, sobrenome, idade, instagram, linkedin);

function nomeCompleto (obj) {
    return `${obj.nome} ${obj.sobrenome}`;
}

//ou

function nomeCompleto2 (obj) {
    let nome = obj.nome;
    let sobrenome = obj.sobrenome;

    return `${nome} ${sobrenome}`;
}

//ou ainda!

function nomeCompleto3 ({ nome, sobrenome, social: {instagram: {url: instagram}}} ) {
    return `${nome} ${sobrenome} (Siga em: ${instagram})`;
}

console.log(nomeCompleto(pessoa));

console.log(nomeCompleto2(pessoa));

console.log(nomeCompleto3(pessoa));

