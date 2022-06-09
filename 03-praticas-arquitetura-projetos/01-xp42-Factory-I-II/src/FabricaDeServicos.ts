import { FabricaGenerica } from "./FabricGenerica";
import { ItemGenerico } from "./ItemGenerico";
import { Servico } from "./Servico";

export class FabricaDeServicos extends FabricaGenerica {
    
    
    public criarUmItem(): ItemGenerico {
        return new Servico();
    }
    
}