import db from "../models";
import { my_packages } from "../seeders/packages";
import { my_tlds } from "../seeders/tlds";

export const createPackages = () => {
  my_packages.map((my_package) => {
    db.Package.create(my_package);
  });
};

export const createTLD = () => {
  my_tlds.map((my_tld) => {
    db.TLD.create(my_tld);
  });
};

interface HostingPackage {
  name: string;
  cost_mon: number;
  cost_ann: number;
  databases: number;
  domains: number;
  mailboxes: number;
  subdomains: number;
  popular: boolean;
  storage: number;
}
interface TLD {
  name: string;
  cost: number;
  featured: boolean;
}

export const getPackages = async (): Promise<HostingPackage> => {
  const package_data = await db.Package.findAll();
  const packages = await package_data.map((pack: HostingPackage) => {
    return {
      name: pack.name,
      cost_mon: pack.cost_mon,
      cost_ann: pack.cost_ann,
      databases: pack.databases,
      domains: pack.domains,
      mailboxes: pack.mailboxes,
      subdomains: pack.subdomains,
      popular: pack.popular,
      storage: pack.storage,
    };
  });
  return packages;
};
export const getTLDs = async (): Promise<TLD> => {
  const tld_data = await db.TLD.findAll();
  const tld = await tld_data.map((pack: TLD) => {
    return {
      name: pack.name,
      featured: pack.featured,
      cost: pack.cost,
    };
  });
  return tld;
};
