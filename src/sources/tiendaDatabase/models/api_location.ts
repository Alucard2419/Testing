import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_shop, api_shopId } from './api_shop';

export interface api_locationAttributes {
  id: number;
  created: Date;
  updated: Date;
  name: string;
  user_id: string;
  lat: number;
  lng: number;
}

export type api_locationPk = "id";
export type api_locationId = api_location[api_locationPk];
export type api_locationOptionalAttributes = "id";
export type api_locationCreationAttributes = Optional<api_locationAttributes, api_locationOptionalAttributes>;

export class api_location extends Model<api_locationAttributes, api_locationCreationAttributes> implements api_locationAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  name!: string;
  user_id!: string;
  lat!: number;
  lng!: number;

  // api_location hasMany api_shop via location_id
  api_shops!: api_shop[];
  getApi_shops!: Sequelize.HasManyGetAssociationsMixin<api_shop>;
  setApi_shops!: Sequelize.HasManySetAssociationsMixin<api_shop, api_shopId>;
  addApi_shop!: Sequelize.HasManyAddAssociationMixin<api_shop, api_shopId>;
  addApi_shops!: Sequelize.HasManyAddAssociationsMixin<api_shop, api_shopId>;
  createApi_shop!: Sequelize.HasManyCreateAssociationMixin<api_shop>;
  removeApi_shop!: Sequelize.HasManyRemoveAssociationMixin<api_shop, api_shopId>;
  removeApi_shops!: Sequelize.HasManyRemoveAssociationsMixin<api_shop, api_shopId>;
  hasApi_shop!: Sequelize.HasManyHasAssociationMixin<api_shop, api_shopId>;
  hasApi_shops!: Sequelize.HasManyHasAssociationsMixin<api_shop, api_shopId>;
  countApi_shops!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_location {
    return api_location.init({
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
      type: DataTypes.STRING(100),
      allowNull: false
    },
    user_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lat: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    lng: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'api_location',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_location_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
