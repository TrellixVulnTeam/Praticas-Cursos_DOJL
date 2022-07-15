import IRepository from "../../../repositories/IRepository";


type CadastrarPsicologosPayload = {
  nome: string;
  email: string;
  senha: string;
  idade: number;
  apresentacao: string;
};

export default class PsicologosUseCase {
  private repository: IRepository;

  constructor(PsicologosRepository: IRepository) {
    this.repository = PsicologosRepository;
  }

  cadastrarPsicologo(payload: CadastrarPsicologosPayload) {
    const newPsicologo = this.repository.create(payload);

    return newPsicologo;
  }

  listaPsicologos({ ativo: boolean}) {
    const lista = this.repository.findAll();
  }
}
