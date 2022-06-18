"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(id, no, em, wh) {
        this.id = id;
        this.nome = no;
        this.email = em;
        this.whatsapp = wh;
    }
}
exports.Cliente = Cliente;
