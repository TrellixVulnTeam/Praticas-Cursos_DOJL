import { Request, Response } from "express";

import PsicologosUseCase from "../useCases/PsicologosUseCase";

type BodyCreatePsicologo = {
  nome: string;
  email: string;
  senha: string;
  idade: number;
  apresentacao: string;
};
export default class PsicologosController {
  private useCase: PsicologosUseCase;

  constructor(useCase: PsicologosUseCase) {
    this.useCase = useCase;
  }

  async create(req: Request, res: Response) {
    try {
      //recebemos a requisição

      const psicologo = await this.useCase.cadastrarPsicologo(
        req.body as BodyCreatePsicologo
      );

      //devolvemos uma resposta
      return res.status(201).json(psicologo);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame o batman!");
    }
  }
}
