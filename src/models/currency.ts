import { DataTypes, Model } from "sequelize";
import sequelize from "../database/dbConnection";

class Currency extends Model{
  public id! : number;
  public name!: string;
  public symbol!: string;
  public price_in_USD!: number;
}

Currency.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  symbol: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  price_in_USD: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
},
  {
    sequelize,
    modelName: 'Currency',
    tableName: 'Currencies',
    timestamps: true
  }
);

export default Currency;