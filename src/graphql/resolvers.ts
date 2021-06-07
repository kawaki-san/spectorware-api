// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

import { findPackageByPopularity, packages, tlds } from "../utils";

export const resolvers = {
  Query: {
    packages: () => packages(),
    tlds: () => tlds(),
    popularPackages: (val: boolean) => findPackageByPopularity(val),
  },
};
