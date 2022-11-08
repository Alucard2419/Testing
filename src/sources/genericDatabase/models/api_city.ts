import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_country, api_countryId } from './api_country';
import type { api_municipality, api_municipalityId } from './api_municipality';

export interface api_cityAttributes {
  id: number;
  created: Date;
  updated: Date;
  lat: number;
  lng: number;
  name: string;
  country_id: number;
}

export type api_cityPk = "id";
export type api_cityId = api_city[api_cityPk];
export type api_cityOptionalAttributes = "id";
export type api_cityCreationAttributes = Optional<api_cityAttributes, api_cityOptionalAttributes>;

export class api_city extends Model<api_cityAttributes, api_cityCreationAttributes> implements api_cityAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  lat!: number;
  lng!: number;
  name!: string;
  country_id!: number;

  // api_city hasMany api_municipality via city_id
  api_municipalities!: api_municipality[];
  getApi_municipalities!: Sequelize.HasManyGetAssociationsMixin<api_municipality>;
  setApi_municipalities!: Sequelize.HasManySetAssociationsMixin<api_municipality, api_municipalityId>;
  addApi_municipality!: Sequelize.HasManyAddAssociationMixin<api_municipality, api_municipalityId>;
  addApi_municipalities!: Sequelize.HasManyAddAssociationsMixin<api_municipality, api_municipalityId>;
  createApi_municipality!: Sequelize.HasManyCreateAssociationMixin<api_municipality>;
  removeApi_municipality!: Sequelize.HasManyRemoveAssociationMixin<api_municipality, api_municipalityId>;
  removeApi_municipalities!: Sequelize.HasManyRemoveAssociationsMixin<api_municipality, api_municipalityId>;
  hasApi_municipality!: Sequelize.HasManyHasAssociationMixin<api_municipality, api_municipalityId>;
  hasApi_municipalities!: Sequelize.HasManyHasAssociationsMixin<api_municipality, api_municipalityId>;
  countApi_municipalities!: Sequelize.HasManyCountAssociationsMixin;
  // api_city belongsTo api_country via country_id
  country!: api_country;
  getCountry!: Sequelize.BelongsToGetAssociationMixin<api_country>;
  setCountry!: Sequelize.BelongsToSetAssociationMixin<api_country, api_countryId>;
  createCountry!: Sequelize.BelongsToCreateAssociationMixin<api_country>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_city {
    return api_city.init({
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
    lat: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    lng: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_country',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_city',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_city_country_id_d6907381",
        fields: [
          { name: "country_id" },
        ]
      },
      {
        name: "api_city_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
