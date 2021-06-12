import { PrismaClient } from ".prisma/client";
import { DataSource, DataSourceConfig } from "apollo-datasource";

class TopLevelDomainAPI extends DataSource {
  store: PrismaClient;
  context: any;
  constructor({ store }: { store: PrismaClient }) {
    super();
    this.store = store;
  }

  initialize(config: DataSourceConfig<any>) {
    this.context = config.context;
  }

  tlds = async () => {
    const allTLDs = await this.store.tLDs.findMany();
    return allTLDs;
  };
}

export default TopLevelDomainAPI;