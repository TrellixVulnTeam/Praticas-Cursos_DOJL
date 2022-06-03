class Carro {
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220,
    ) {}

    alterarVelocidade (delta: number) {
        const novaVelocidade = this.velocidadeAtual + delta;

        if(novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeAtual : 0;
        }
    }

    acelerar () {
        this.alterarVelocidade (5)      
    }

    freiar () {
        this.alterarVelocidade (-5)
    }
}

const carro1 = new Carro('Chevrolet', 'Prisma', 250);
//carro1.velocidadeMaxima = 200; // não consigo alterar a propriedade pois ela é privada.
//carro1.velocidadeAtual = 200; // não consigo alterar a propriedade pois ela é privada.

carro1.acelerar(); //através do método criado dentro da classe eu cosnigo ter acesso aos atributos privados que estão dentro da classe.


class Camaro extends Carro{ //camaro herda todas as caracteristicas da classe Carros Carros
    private turbo = false;

    constructor() {
        super('Chevrolet', 'Camaro', 290);
    } 
    
    ligarTurbo() {
        this.turbo = true;
    }

    desligarTurbo() {
        this.turbo = false;
    }
}

const camaro1 = new Camaro();
camaro1.acelerar();
camaro1.freiar();
camaro1.ligarTurbo();
camaro1.desligarTurbo();