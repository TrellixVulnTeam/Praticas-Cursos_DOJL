export default class Pizza {
    nome: string;
    ingredientes: string[];
    preparo: boolean;
    valor: number;

    constructor(nome: string, ingredientes: string[], preparo: boolean, valor: number){
        this.nome = nome;
        this.ingredientes = ingredientes;   
        this.preparo = preparo;
        this.valor = valor;
    };

    
}