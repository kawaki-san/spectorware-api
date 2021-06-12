const { ApolloServer } = require("apollo-server");
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import { getPackages } from "./utils";
import { createPackages, createTLDs } from "./utils";
import { PrismaClient } from ".prisma/client";
import HostingPackageAPI from "./datasources/hosting";
import TopLevelDomainAPI from "./datasources/tld";
const store = new PrismaClient();

const dataSources = () => ({
  hostingAPI: new HostingPackageAPI({ store }),
  tldAPI: new TopLevelDomainAPI({ store }),
});

const context = async ({ request }: { request: any }) => {
  return null;
};

//createTLDs();
//createPackages();
getPackages();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context,
});


server.listen().then(({ url }: { url: String }) => {
  console.log(`🚀  Server ready at ${url}`);
});
