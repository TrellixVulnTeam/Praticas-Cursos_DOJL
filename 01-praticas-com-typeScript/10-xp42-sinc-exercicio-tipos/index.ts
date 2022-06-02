const identificationMock: string = 'alo@gama.com';
const passwordMock: string = 'aloSenha1';

type Produto = {
    nome: string;
    codigoBarras: number;
    preco: number;
    desconto?: number;
};

function login(identification: number | string, password:string): boolean {
    return identification === identificationMock && password === passwordMock;
}

console.log(login('alo@gama.com', 'aloSenha1'));

console.log(login('teste', '123'));

const Ps: Produto[] = [
    {
      nome: "Brinquedo",
      codigoBarras: 1231241212312,
      preco: 39.99,
      desconto: 2.99,
    },
    {
      nome: "Notebook",
      codigoBarras: 1223232112,
      preco: 3300.9,
    },
  ];
  
  // usando tuple
  const produto: [string, number, number, number?] = [
    "Brinquedo",
    1231241212312,
    39.99,
  ];