let info = ['Maycon Rocha', 'Maycon', 'Rocha', '@_mayconrocha_'];

let [ nomeCompleto, nome, sobrenome, instagram] = info; //a descontrução do array precisa ser feita na ordem em que o array foi criado, a primeira variavel utilizada na desconstruçao sera correspondente ao indice 0 do array, a segunda variavel correspondente ao indici 1, e assim sucessivamente. 

console.log(nomeCompleto, nome, sobrenome, instagram);

let info2 = ['Mateus Santos', 'Adriana Rantos', 'Adriano Santos', 'Mariana Santos'];

let [ nomePai, nomeMae, , ] = info2; //caso eu não queira utilizar um ou mais itens do array na descontrução, basta no momento da descontrução deixar os seus espaços correspondentes vazios. Caso os itens que serão ignorados estejam no final do array, basta apenas ignora-los.

console.log(nomeMae, nomePai);

let [nomeJogador, nivelJogador = 1, vidaJogador = 1000, energiaJogador = 100] = [ 'Maycon', 32, 100, 94]; //também podemos realizar a descontrução do array no momento da sua criação;