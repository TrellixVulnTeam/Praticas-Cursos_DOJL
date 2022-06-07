import Cliente from './Cliente';

export defaul class Pedido {
    id: number;
    itens: string[];
    quantItens: number;
    precoFinal: number;
    enderecoEntrega: string[];
    formaPagamento: string;

    constructor(
        id: number,
        itens: string[],
        quantItens: number,
        precoFinal: number,
        enderecoEntrega: string[],
        formaPagamento: string) {
            this. id = id;
            this.itens = itens;
            this.quantItens = quantItens;
            this.precoFinal = precoFinal;
            this.enderecoEntrega = enderecoEntrega;
            this.formaPagamento = formaPagamento;
    }

    gerarPedido(): Pedido[] {

    };

    entregarPedido(): boolean {

    };
    
}