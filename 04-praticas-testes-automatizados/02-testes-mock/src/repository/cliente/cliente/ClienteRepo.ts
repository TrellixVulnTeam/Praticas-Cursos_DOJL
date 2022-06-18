import { Cliente } from "../../../model/Cliente";


export class ClienteRepo {
    public async REPO_recuperarTodos() {
        try {
            return await Cliente.findAll(); //faz o select
        }
        catch (err) {
            console.error(err);
        }
    }

    public async REPO_recuperarTodosPeçoId(id: number) {
        try {
            return await Cliente.findByPk(id);
        }
        catch (error) {
            console.error(error);
        } 
    }
}