import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_city, api_cityId } from './api_city';

export interface api_countryAttributes {
  id: number;
  created: Date;
  updated: Date;
  name: string;
}

export type api_countryPk = "id";
export type api_countryId = api_country[api_countryPk];
export type api_countryOptionalAttributes = "id";
export type api_countryCreationAttributes = Optional<api_countryAttributes, api_countryOptionalAttributes>;

export class api_country extends Model<api_countryAttributes, api_countryCreationAttributes> implements api_countryAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  name!: string;

  // api_country hasMany api_city via country_id
  api_cities!: api_city[];
  getApi_cities!: Sequelize.HasManyGetAssociationsMixin<api_city>;
  setApi_cities!: Sequelize.HasManySetAssociationsMixin<api_city, api_cityId>;
  addApi_city!: Sequelize.HasManyAddAssociationMixin<api_city, api_cityId>;
  addApi_cities!: Sequelize.HasManyAddAssociationsMixin<api_city, api_cityId>;
  createApi_city!: Sequelize.HasManyCreateAssociationMixin<api_city>;
  removeApi_city!: Sequelize.HasManyRemoveAssociationMixin<api_city, api_cityId>;
  removeApi_cities!: Sequelize.HasManyRemoveAssociationsMixin<api_city, api_cityId>;
  hasApi_city!: Sequelize.HasManyHasAssociationMixin<api_city, api_cityId>;
  hasApi_cities!: Sequelize.HasManyHasAssociationsMixin<api_city, api_cityId>;
  countApi_cities!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_country {
    return api_country.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'api_country',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_country_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
