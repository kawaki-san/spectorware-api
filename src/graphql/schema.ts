const { gql } = require("apollo-server");
export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Package {
    name: String!
    cost_mon: Float
    cost_ann: Float
    databases: Int
    domains: Int
    mailboxes: Int
    subdomains: Int
    popular: Boolean
  }

  type TLD {
    name: String!
    cost: Float
    featured: Boolean
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    packages: [Package]
    tlds: [TLD]
    popularPackages: [Package]
  }
`;
