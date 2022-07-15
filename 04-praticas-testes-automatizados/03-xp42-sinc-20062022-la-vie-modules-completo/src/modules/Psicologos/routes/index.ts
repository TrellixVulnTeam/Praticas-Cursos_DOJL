import { Router } from "express";
import { psicologosController } from "../controller";

const routes = Router();

routes.post("/", psicologosController.create);

export default routes;
