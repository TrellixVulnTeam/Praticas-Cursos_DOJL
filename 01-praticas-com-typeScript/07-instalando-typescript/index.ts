function greet(name: string) { //estamos trabalhando no modo script model -> mesmo que tenhamos arquivs diferentes contendo js, é como se tivessemos um único grande arquivo e, por esse motivo, não podemos declarar duas variáveis iguais (memso que sejam nos arquivos diferentes). Para que esse tipo de caso não resulte em um erro, é necessário usar 'export', exemplo no final deste código.... Dessa forma estaremos trablhando no modo 'model mode'
    return `Olá ${name}`;
}

console.log(greet('Maycon Rocha'));

export default greet;