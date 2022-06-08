"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaDeProdutos = void 0;
const FabricGenerica_1 = require("./FabricGenerica");
const Produto_1 = require("./Produto");
class FabricaDeProdutos extends FabricGenerica_1.FabricaGenerica {
    criarUmItem() {
        return new Produto_1.Produto();
    }
}
exports.FabricaDeProdutos = FabricaDeProdutos;
