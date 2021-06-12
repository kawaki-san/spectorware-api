import { PrismaClient } from ".prisma/client";
import { DataSource, DataSourceConfig } from "apollo-datasource";

class HostingPackageAPI extends DataSource {
  store: PrismaClient;
  context: any;
  constructor({ store }: { store: PrismaClient }) {
    super();
    this.store = store;
  }

  initialize(config: DataSourceConfig<any>) {
    this.context = config.context;
  }

  packages = async () => {
    const hostingPackages = await this.store.packages.findMany();
    return hostingPackages;
  };
}

export default HostingPackageAPI;