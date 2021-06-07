const { ApolloServer } = require("apollo-server");
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import { getPackages } from "./utils";

//createTLD();
//createPackages();
getPackages();
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }: { url: String }) => {
  console.log(`🚀  Server ready at ${url}`);
});
