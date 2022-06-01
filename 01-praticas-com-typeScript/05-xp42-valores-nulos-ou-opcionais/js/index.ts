let altura: number | null = 1.6;
altura = null; //eu somente consigo definir altura como null porque inserir o tipo null juntamente com tipo number na declaração da variável.

type contato = {
    nome: string,
    telefone1: string,
    telefone2?: string //quando insiro o símbolo de '?' na definião do atributo, na declaração da variável, etc, estou infomrmando que aquela informação é opcional.
}

const contato: contato = {
    nome: 'Vitor',
    telefone1: '123456789'
}