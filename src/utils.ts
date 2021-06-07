import { pool } from "../database/db";

interface Package {
  package: string;
  price_mon: number;
  price_ann: number;
  databases: number;
  domains: number;
  mailboxes: number;
  subdomains: number;
  popular: boolean;
}

interface TLD {
  name: string;
  cost: number;
  featured: boolean;
}

let conn = pool.getConnection();

export const readQuery = async (query: string) => {
  try {
    const res = await (await conn).query(query);
    return res;
  } catch (error) {
    console.log(error);
  } finally {
    if (conn) (await conn).release();
  }
};

export const packages = async () => {
  const query = `
    SELECT * from tblHostingPackages
    ORDER BY cost_mon
    `;
  return readQuery(query);
};

export const tlds = async () => {
  const query = `
    SELECT * from tblTopLevelDomains
    ORDER BY cost
    `;
  return readQuery(query);
};
2;

export const findPackageByPopularity = async (
  popular: boolean
): Promise<Package[] | undefined> => {
  const query = {
    text: "SELECT * FROM tblHostingPackages WHERE popular = ?",
    values: [popular],
  };

  try {
    const res = await (await conn).query(query.text, query.values);
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const findFeaturedTLDs = async (
  featured: boolean
): Promise<TLD[] | undefined> => {
  const query = {
    text: "SELECT * FROM tblTopLevelDomains WHERE featured = ?",
    values: [featured],
  };

  try {
    const res = await (await conn).query(query.text, query.values);
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const createFeaturedDomainsTable = async () => {
  const query = `
  CREATE TABLE tblTopLevelDomains (
      name varchar primary key,
      cost decimal (10,2),
      featured tinybi
  )
  `;

  return readQuery(query) ? "Table created." : "Unable to create table.";
};
