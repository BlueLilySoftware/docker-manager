import { Request, Response } from "express";
import dockerService from "../../services/docker";

class DockerController {
    async findAllRunningContainers(req: Request, res: Response) {
        const data = await dockerService.findAllRunningContainer();

        return res.status(200).json({
            data: data,
        });
    }
}

export default DockerController;
