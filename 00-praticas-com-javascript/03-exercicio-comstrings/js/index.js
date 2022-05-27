const nome = prompt('Digite o seu nome completo: ');

document.body.innerHTML = `Seu nome é ${nome}<br>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras<br>`;
document.body.innerHTML += `A segunda letra do seu nome é \'${nome[1]}\'<br>`;
document.body.innerHTML += `Qual o primeiro indice da letra 'a' no seu nome? ${nome.indexOf('a')}<br>`;
document.body.innerHTML += `Qual o púltimo indice da letra 'a' no seu nome? ${nome.lastIndexOf('a')}<br>`;
document.body.innerHTML += `As últimas três letras do seu nome são: ${nome.slice(-3)}<br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br>`;








 

