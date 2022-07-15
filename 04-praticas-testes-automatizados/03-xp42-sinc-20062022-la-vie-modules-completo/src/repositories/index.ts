import PacientesRepository from "./Pacientes";
import { pacientes, psicologos } from "../models";
import PsicologosRepository from "./Psicologo";
const pacienteRepository = new PacientesRepository(pacientes);

const psicologosRepository = new PsicologosRepository(psicologos);

export { pacienteRepository, psicologosRepository };
