import { Router } from "express";
import controller from "./controller";

const routes = Router();

routes.post("/user", controller.create);
routes.post("/image", controller.create);

export default routes;
