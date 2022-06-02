const empresa: string = "Sistema Omma";
console.log(`Seja bem vindo ao ${empresa}`);

type Receita = {
    id: number;
    titulo: string;
    dificuldade: string;
    ingredientes: string[];
    preparo: string,
    link: string;
    vegano: boolean;
};

let listaDeReceitas: Receita[] = [
    {
        id: 1,
        titulo: "Cachorro Quente",
        dificuldade: "simples",
        ingredientes: ["1 pao de leite", "1 Salsicha", "Maionese"],
        preparo: "jodbvnujd osbvcujsbn jsbfusb",
        link: "youtube.com",
        vegano: false,
      },
      {
        id: 2,
        titulo: "Hamburguer de Grao de Bico",
        dificuldade: "simples",
        ingredientes: ["1 pao de leite", "1 Salsicha", "Maionese"],
        preparo: "Um texto bonitinho aqui",
        link: "youtube.com",
        vegano: true,
      },
];

const cadastrarReceita = (
    id: number,
    titulo: string,
    dificuldade: string,
    ingredientes: string[],
    preparo: string,
    link: string,
    vegano: boolean
) => {
    const novaReceita = {
        id,
        titulo,
        dificuldade,
        ingredientes,
        preparo,
        link,
        vegano,
    }

    listaDeReceitas.push(novaReceita);
    console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
};

console.log(listaDeReceitas[1].ingredientes);

function exibirReceitas() {
    for (let index: number = 0; index < listaDeReceitas.length; index++) {
      const receita: Receita = listaDeReceitas[index];
      console.log("--------------------------------");
      console.log("Titulo = " + receita.titulo);
  
      for (let index: number = 0; index < receita.ingredientes.length; index++) {
        const ingrediente: string = receita.ingredientes[index];
        console.log("ingredientes = " + ingrediente);
      }
  
      console.log("É vegano? " + receita.vegano);
      console.log("--------------------------------");
    }
  }

  exibirReceitas();

function deletarReceita(id: number) {
  let novaListaDeReceitas: Receita[] = [];

  for (let index: number = 0; index < listaDeReceitas.length; index++) {
    const receita: Receita = listaDeReceitas[index];

    if (receita.id != id) {
      novaListaDeReceitas.push(receita);
    }
  }

  if (novaListaDeReceitas.length == listaDeReceitas.length) {
    return console.log("Não encontrei o id");
  }

  listaDeReceitas = novaListaDeReceitas;
  console.log("receita deletada com sucesso!");
}
