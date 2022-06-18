import { Cliente } from "../../../model/Cliente";

export class UseCaseCliente {
   public constructor (private clienteRepo: ClienteRepo) {

   }

   public cadastrar(): void {

   }

   public async recuperarPeloId(id: number) {
        return await this.clienteRepo.REPO_recuperarPeloId(id);
   }

   public async recuperarTodos() {
        return await this.clienteRepo.REPO_recuperarTodos();
   }
}