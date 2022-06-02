"use strict";
const identificationMock = 'alo@gama.com';
const passwordMock = 'aloSenha1';
function login(identification, password) {
    return identification === identificationMock && password === passwordMock;
}
console.log(login('alo@gama.com', 'aloSenha1'));
console.log(login('teste', '123'));
const Ps = [
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
const produto = [
    "Brinquedo",
    1231241212312,
    39.99,
];
