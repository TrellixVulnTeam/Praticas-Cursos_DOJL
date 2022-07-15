import { psicologosRepository } from "../../../repositories";
import PsicologosUseCase from "./PsicologosUseCase";

const psicologosUseCase = new PsicologosUseCase(psicologosRepository);

export { psicologosUseCase };
