"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaDeServicos = void 0;
const FabricGenerica_1 = require("./FabricGenerica");
const Servico_1 = require("./Servico");
class FabricaDeServicos extends FabricGenerica_1.FabricaGenerica {
    criarUmItem() {
        return new Servico_1.Servico();
    }
}
exports.FabricaDeServicos = FabricaDeServicos;
