const empresa: string = "Sistema Omma";
console.log(`Seja bem vindo ao ${empresa}`);

type Receita = {
  id: number;
  titulo: string;
  dificuldade: string;
  ingredientes: string[];
  preparo: string;
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
  const novaReceita: Receita = {
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano,
  };
  listaDeReceitas.push(novaReceita);

  console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
};

console.log(listaDeReceitas[1].ingredientes);

function exibirReceitas() {
  for (let index = 0; index < listaDeReceitas.length; index++) {
    const receita: Receita = listaDeReceitas[index];
    console.log("--------------------------------");
    console.log("Titulo = " + receita.titulo);

    for (let index = 0; index < receita.ingredientes.length; index++) {
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

  for (let index = 0; index < listaDeReceitas.length; index++) {
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

// function deletarReceita(id: number) {
//   const novaListaDeReceitas = listaDeReceitas.filter(
//     (receita: Receita) => receita.id != id
//   );
//   if (novaListaDeReceitas.length == listaDeReceitas.length) {
//     return console.log("Não encontrei o id");
//   }

//   listaDeReceitas = novaListaDeReceitas;
//   console.log("receita deletada com sucesso!");
// }

// function deletarReceita(id: number) {
//   for (let i = 0; i < listaDeReceitas.length; i++) {
//     if (id === listaDeReceitas[i].id) {
//       listaDeReceitas.splice(i, 1);
//       return console.log(`receita ${listaDeReceitas[i].titulo} deletada`);
//     }
//   }

//   console.log("Receita não encontrada");
// }

const condicaoDeReceita = (receita: Receita) => (receita.vegano = true);

const receitasVeganas = listaDeReceitas.map(condicaoDeReceita);

const receitaNormais = listaDeReceitas.filter(
  (receita: Receita) => receita.vegano == true
);

const atualizaReceita = (id: number, receitaAtualizada: Receita) => {
  let foiAtualizado: boolean = false;

  listaDeReceitas.forEach((receita: Receita) => {
    if (receita.id != id) {
      return;
    }

    if (receitaAtualizada.titulo) {
      receita.titulo = receitaAtualizada.titulo;
    }

    if (receitaAtualizada.ingredientes) {
      receita.ingredientes = receitaAtualizada.ingredientes;
    }

    foiAtualizado = true;
  });

  console.log(
    foiAtualizado
      ? "Receita atualizada com sucesso!"
      : "Não foi encontrado o id"
  );
};
