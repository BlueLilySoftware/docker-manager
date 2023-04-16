import { Router } from "express";
import DockerController from "../controllers/docker/docker.controller";

const dockerRouter = Router();
const dockerController = new DockerController();

export default dockerRouter;

dockerRouter.get("/running", dockerController.findAllRunningContainers);
