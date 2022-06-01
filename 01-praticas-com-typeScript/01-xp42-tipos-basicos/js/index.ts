//boolean
let contaPaga: boolean = true;  

//number
const idade: number = 28;
const notaAvaliacao: number = 9.9;

//string
const nomeusuario: string = 'Brian';


//array
const idades: number[] = [23, 24, 25, 26];

//tuple
let jogadores: [string, number, boolean];
jogadores = ['Victor', 10, true];

//enum
enum StatusAprovacao {
    Aprovado,
    Pendente,
    Rejeitado
}

const statusAprovacao = StatusAprovacao.Aprovado;

//any
const retornoDaAPI: any[] =[123, 'José', false];
const retornoDaAPI2: any = {
    //...
};

//void
function printaNaTela(msg: string) {
    console.log(msg);
}

//null e undefined
const u: undefined = undefined;
const n: null = null;

//object
function criar(objecto: object) {
    //...
}

criar({
    proprieadade: 1
})

//never
function loopInfinito(): never {
    while (true) { }
}

function ero(mensagem: string): never {
    throw new Error(mensagem);
    
}

function falha() { //como essa função retorna um tipo never, o js consegue inferir que ela também é do tipo never
    return ero('Algo falhou');
}
