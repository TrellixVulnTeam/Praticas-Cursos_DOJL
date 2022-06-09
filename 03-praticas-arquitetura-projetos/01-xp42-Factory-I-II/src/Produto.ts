import { ItemGenerico } from "./ItemGenerico";

export class Produto implements ItemGenerico {
    private id: number;
    private desc: string;
    private foto: string;
    private preco: number;
    
    public constructor() {
        this.id = 1;
        this.desc = 'Computador';
        this.foto = 'foto.pnj';
        this.preco = 3500;
    }

    exibir(): void {
        console.log(`Produto: ${this.id} | ${this.desc} | ${this.foto} | R$ ${this.preco}`);
    }
}