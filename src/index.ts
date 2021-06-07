const { ApolloServer } = require("apollo-server");
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import { createPackages, createTLD, getPackages } from "./utils";
import db from "../models";

//createTLD();
//createPackages();
getPackages();
const server = new ApolloServer({ typeDefs, resolvers });

db.sequelize.sync().then(() => {
  // // The `listen` method launches a web server.

  server.listen().then(({ url }: { url: String }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
});
