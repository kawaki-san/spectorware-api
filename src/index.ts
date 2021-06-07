const { ApolloServer } = require("apollo-server");
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import db from "../models";

const server = new ApolloServer({ typeDefs, resolvers });

db.sequelize.sync().then(() => {
  // // The `listen` method launches a web server.

  server.listen().then(({ url }: { url: String }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
});
