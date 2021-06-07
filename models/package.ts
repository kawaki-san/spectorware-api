"use strict";
import { Model } from "sequelize";

interface PackageAttributes {
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

module.exports = (
  sequelize: any,
  DataTypes: {
    STRING: (arg0: number) => any;
    DECIMAL: (arg0: number, arg1: number) => any;
    INTEGER: any;
    BOOLEAN: any;
  }
) => {
  class Package extends Model<PackageAttributes> implements PackageAttributes {
    name!: string;
    cost_mon!: number;
    cost_ann!: number;
    databases!: number;
    domains!: number;
    mailboxes!: number;
    subdomains!: number;
    popular!: boolean;
    storage!: number;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Package.init(
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true,
        comment: "name of the package",
      },
      cost_mon: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
        comment: "cost per month",
      },
      databases: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
        comment: "max number of databases",
      },
      domains: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: "max number of domains to be hosted",
      },
      mailboxes: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
        comment: "max number of mailboxes",
      },
      subdomains: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
        comment: "max number of subdomains",
      },
      popular: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        comment: "package popular",
      },
      cost_ann: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
        comment: "cost per year",
      },
      storage: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
        comment: "storage (in gigabytes) of the package",
      },
    },
    {
      sequelize,
      modelName: "Package",
    }
  );
  return Package;
};
