import { ItemGenerico } from "./ItemGenerico";

export class Servico implements ItemGenerico {
    private codgio: number;
    private nome: string;
    private valor: number;
    private aliquota: number;

    public constructor () {
        this.codgio = 1;
        this.nome = 'Formatar computador';
        this.valor = 200;
        this.aliquota = 6;
    }
    exibir(): void {
        console.log(`Serviço: ${this.codgio} - ${this.nome} - R$${this.valor} - ${this.aliquota}%`);
    }
}