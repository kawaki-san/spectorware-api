const { ApolloServer } = require("apollo-server");
import {typeDefs} from "./graphql/schema";
import {resolvers} from "./graphql/resolvers";


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }:{url: String}) => {
  console.log(`🚀  Server ready at ${url}`);
});
