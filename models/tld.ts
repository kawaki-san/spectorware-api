"use strict";
import { Model } from "sequelize";

interface TLDAttributes {
  name: string;
  cost: number;
  featured: boolean;
}

module.exports = (
  sequelize: any,
  DataTypes: {
    STRING: (arg0: number) => any;
    DECIMAL: (arg0: number, arg1: number) => any;
    BOOLEAN: any;
  }
) => {
  class TLD extends Model<TLDAttributes> implements TLDAttributes {
    name!: string;
    cost!: number;
    featured!: boolean;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  TLD.init(
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true,
      },
      cost: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      featured: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "TLD",
    }
  );
  return TLD;
};
