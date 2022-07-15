const d = new Date();

console.log(d);
console.log(d.toDateString());
console.log(d.toUTCString());
console.log(d.toString());

const e = new Date(1994, 0, 7, 4, 27, 32);

console.log(e);

const f = new Date('2022-01-6 14:25:08');

console.log(f);

let novaData;

novaData = d.getFullYear(); //retorna apenas o ano
console.log(novaData);

novaData = d.getDay(); //retorna apenas o dia da semana
console.log(novaData);

novaData = d.getDate(); //retorna apenas o dia atual
console.log(novaData);

novaData = d.getHours(); //retorna apenas as horas
console.log(novaData);

novaData = d.getMinutes(); //retorna apenas os minutos
console.log(novaData);

novaData = d.getSeconds(); //retorna apenas os segundos
console.log(novaData);

novaData = d.getMilliseconds(); //retorna apenas os milisegundos
console.log(novaData);

novaData = d.getTime(); //retorna todos os milisegundos passados desde janeiro de 1970 até hoje.
console.log(novaData);

console.log(d);

d.setFullYear(2023); //set em Years
console.log(d);

d.setMonth(1); //set em Month
console.log(d);

d.setDate(3); //set em Day
console.log(d);

d.setDate( d.getDate() + 2);
console.log(d);

d.setHours( d.getHours() + 13);
console.log(d);
