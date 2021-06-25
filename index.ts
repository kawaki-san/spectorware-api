const { ApolloServer } = require("apollo-server");
import { typeDefs } from "./src/graphql/schema";
import { resolvers } from "./src/graphql/resolvers";
import { createPackages, createTLD, getPackages, getTLDs } from "./src/utils";
import db from "./models";

//createTLD();
//createPackages();
getPackages();
getTLDs();
const server = new ApolloServer({ typeDefs, resolvers });

db.sequelize.sync().then(() => {
  // // The `listen` method launches a web server.

  server.listen().then(({ url }: { url: String }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
});
