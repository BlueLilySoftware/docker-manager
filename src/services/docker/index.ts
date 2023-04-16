import docker from "../../providers/dockerode/dockerode.provider";
import DockerService from "./docker.service";

const dockerService = new DockerService(docker);

export default dockerService;
