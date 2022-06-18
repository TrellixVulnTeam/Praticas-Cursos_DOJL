"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCaseCliente = void 0;
const Cliente_1 = require("../../../model/Cliente");
class UseCaseCliente {
    cadastrar() {
    }
    recuperarPeloId(id) {
        if (id == 1) {
            return new Cliente_1.Cliente(1, 'Maycon', 'exemplo@email.com', '79999999999');
        }
        return null;
    }
    recuperarTodos() {
        return null;
    }
}
exports.UseCaseCliente = UseCaseCliente;
