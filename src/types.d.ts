import HostingPackageAPI from "./datasources/hosting";
import TopLevelDomainAPI from "./datasources/tld";

export declare type DataSources<TContext> = {
  [name: string]: DataSource<TContext>;
};

export interface myDataSources {
  hostingAPI: HostingPackageAPI;
  tldAPI: TopLevelDomainAPI;
}