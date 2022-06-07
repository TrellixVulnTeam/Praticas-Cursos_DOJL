        class Data {
    public dia: number; //em classes eu posso definir os modificadores de acesso, tornando um atributo público (que já é o padrão) ou não.
    private mes: number;
    ano: number;

    constructor(dia: number, mes: number, ano: number = 1970) { //eu posso definir valores padrõs para os atributos, assim eu poss não informá-los no uso da classe
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

class Data2 {
    // public dia: number; //em classes eu posso definir os modificadores de acesso, tornando um atributo público (que já é o padrão) ou não.
    // private mes: number;
    // ano: number;

    constructor(public dia: public, public mes: number, public ano: number = 1970) { //eu posso definir modificadores de acesso direto no construtor ao invés de 
                                                                //estar declarando que tenho os atributos e definir os valores na propriedade 
                                                                //da classe através do 'this'.
        // this.dia = dia;
        // this.mes = mes;
        // this.ano = ano;
    }
}

const data = new Data(1, 1, 20);
console.log(data.dia);
// console.log(data.mes); //o JS não me deixa acessar o mes porque ele está definido como privado

const data2 = new Data(1, 2) //eu consegui utilizar a classe Data sem informar o ano porque já deixei ele com um valor pré definido
