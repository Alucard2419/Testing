import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_cupaymentsaccount, api_cupaymentsaccountId } from './api_cupaymentsaccount';

export interface api_cubanbankAttributes {
  id: number;
  name: string;
  logo: string;
  cover: string;
}

export type api_cubanbankPk = "id";
export type api_cubanbankId = api_cubanbank[api_cubanbankPk];
export type api_cubanbankOptionalAttributes = "id";
export type api_cubanbankCreationAttributes = Optional<api_cubanbankAttributes, api_cubanbankOptionalAttributes>;

export class api_cubanbank extends Model<api_cubanbankAttributes, api_cubanbankCreationAttributes> implements api_cubanbankAttributes {
  id!: number;
  name!: string;
  logo!: string;
  cover!: string;

  // api_cubanbank hasMany api_cupaymentsaccount via bank_id
  api_cupaymentsaccounts!: api_cupaymentsaccount[];
  getApi_cupaymentsaccounts!: Sequelize.HasManyGetAssociationsMixin<api_cupaymentsaccount>;
  setApi_cupaymentsaccounts!: Sequelize.HasManySetAssociationsMixin<api_cupaymentsaccount, api_cupaymentsaccountId>;
  addApi_cupaymentsaccount!: Sequelize.HasManyAddAssociationMixin<api_cupaymentsaccount, api_cupaymentsaccountId>;
  addApi_cupaymentsaccounts!: Sequelize.HasManyAddAssociationsMixin<api_cupaymentsaccount, api_cupaymentsaccountId>;
  createApi_cupaymentsaccount!: Sequelize.HasManyCreateAssociationMixin<api_cupaymentsaccount>;
  removeApi_cupaymentsaccount!: Sequelize.HasManyRemoveAssociationMixin<api_cupaymentsaccount, api_cupaymentsaccountId>;
  removeApi_cupaymentsaccounts!: Sequelize.HasManyRemoveAssociationsMixin<api_cupaymentsaccount, api_cupaymentsaccountId>;
  hasApi_cupaymentsaccount!: Sequelize.HasManyHasAssociationMixin<api_cupaymentsaccount, api_cupaymentsaccountId>;
  hasApi_cupaymentsaccounts!: Sequelize.HasManyHasAssociationsMixin<api_cupaymentsaccount, api_cupaymentsaccountId>;
  countApi_cupaymentsaccounts!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_cubanbank {
    return api_cubanbank.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cover: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'api_cubanbank',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_cubanbank_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
