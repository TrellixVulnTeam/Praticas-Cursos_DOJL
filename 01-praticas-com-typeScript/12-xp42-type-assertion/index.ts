//type assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString(); //informo o tipo da variável através do 'as', aqui o type assertion

//exemplo aplicacao
const input = document.getElementById('numero1') as HTMLInputElement;
console.log(input.value);