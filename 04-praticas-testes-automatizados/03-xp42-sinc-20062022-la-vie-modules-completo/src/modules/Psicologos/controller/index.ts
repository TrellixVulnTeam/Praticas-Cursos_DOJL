import { psicologosUseCase } from "../useCases";
import PsicologosController from "./PacientesController";

const psicologosController = new PsicologosController(psicologosUseCase);

export { psicologosController };
