// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

import { getPackages } from "../utils";

export const resolvers = {
  Query: {
    packages: () => getPackages(),
    //tlds: () => tlds(),
  },
};
