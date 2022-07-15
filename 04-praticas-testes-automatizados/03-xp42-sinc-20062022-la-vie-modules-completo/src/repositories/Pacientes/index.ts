import { Pacientes } from "../../models/Pacientes";
import IRepository from "../IRepository";

export default class PacientesRepository implements IRepository {
  private pacienteModel: any;

  constructor(pacienteModel: Pacientes) {
    this.pacienteModel = pacienteModel.model;
  }

  async create() {}
  async update() {}
  async find() {}
  async findAll() {
    return this.pacienteModel.findAll();
  }
  async delete() {}
}
