"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor() {
        this.id = 1;
        this.desc = 'Computador';
        this.foto = 'foto.pnj';
        this.preco = 3500;
    }
    exibir() {
        console.log(`Produto: ${this.id} | ${this.desc} | ${this.foto} | R$ ${this.preco}`);
    }
}
exports.Produto = Produto;
