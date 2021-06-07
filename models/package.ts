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
      },
      cost_mon: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      databases: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      domains: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      mailboxes: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      subdomains: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      popular: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      cost_ann: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      storage: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
    },
    {
      sequelize,
      modelName: "Package",
    }
  );
  return Package;
};
