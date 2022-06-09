"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servico = void 0;
class Servico {
    constructor() {
        this.codgio = 1;
        this.nome = 'Formatar computador';
        this.valor = 200;
        this.aliquota = 6;
    }
    exibir() {
        console.log(`Serviço: ${this.codgio} - ${this.nome} - R$${this.valor} - ${this.aliquota}%`);
    }
}
exports.Servico = Servico;
