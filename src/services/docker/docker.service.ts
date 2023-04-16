import Dockerode from "dockerode";

class DockerService {
  constructor(private readonly dockerProvider: Dockerode) {}
  async findAllRunningContainer() {
    return await this.dockerProvider.listContainers();
  }
}

export default DockerService;
