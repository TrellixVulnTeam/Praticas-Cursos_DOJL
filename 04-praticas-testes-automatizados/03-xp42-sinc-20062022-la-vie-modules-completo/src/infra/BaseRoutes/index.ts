import routesPaciente from "../../modules/Pacientes/routes";
import routesPsicologos from "../../modules/Psicologos/routes";
import { Router } from "express";

const routes = Router();

routes.use("/pacientes", routesPaciente);
routes.use("/psicologos", routesPsicologos);

export default routes;
