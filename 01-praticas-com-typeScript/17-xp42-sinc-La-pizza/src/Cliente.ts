import Pizza from './Pizza';

export default class Cliente {
    nome: string;

    constructor(nome: string) { //contrutores são chamado no momento da definição de um novo objeto     atrvés da palavra new, então eles podem se rutilizados para realizar qualquer operação desejada, e não apenas definir os atributos
        this.nome = nome;
    }

    fazerPedido(listaPizza: Pizza[], cliente: Cliente): Pedido {

    };
}