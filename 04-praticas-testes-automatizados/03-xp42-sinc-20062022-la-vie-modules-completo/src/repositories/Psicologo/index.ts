import { Psicologos } from "../../models/Psicologos";
import IRepository from "../IRepository";

export default class PsicologosRepository implements IRepository {
  private psicologoModel: any;

  constructor(psicologoModel: Psicologos) {
    this.psicologoModel = psicologoModel.model;
  }

  async create(payload: {
    nome: string;
    email: string;
    senha: string;
    idade: number;
    apresentacao: string;
  }) {
    return this.psicologoModel.create(payload);
  }
  async update() {}
  async find() {
    return this.psicologoModel.findAll();
  }
  async findAll() {}
  async delete() {}
}
