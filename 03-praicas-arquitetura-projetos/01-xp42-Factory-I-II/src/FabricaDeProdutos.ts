import { profileEnd } from "console";
import { FabricaGenerica } from "./FabricGenerica";
import { Produto } from "./Produto";

export class FabricaDeProdutos extends FabricaGenerica {
    public criarUmItem(): Produto {
        return new Produto();
    }
}