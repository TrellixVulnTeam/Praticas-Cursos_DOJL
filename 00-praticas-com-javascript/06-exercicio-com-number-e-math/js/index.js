let num = prompt('Insira o seu número: ');
let num_html = document.getElementsByClassName('num');
let num_float = parseFloat(num);

num_html[0].innerHTML = num;
num_html[1].innerHTML = num;

document.getElementById('raiz').innerHTML = num_float ** 0.5;

document.getElementById('inteiro').innerHTML = Number.isInteger(num_float);
document.getElementById('nan').innerHTML = Number.isNaN(num_float);
document.getElementById('forDown').innerHTML = Math.floor(num_float);
document.getElementById('forUp').innerHTML = Math.ceil(num_float);
document.getElementById('cDec').innerHTML = num_float.toFixed(2);


