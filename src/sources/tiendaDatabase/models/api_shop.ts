import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_location, api_locationId } from './api_location';
import type { api_product, api_productId } from './api_product';

export interface api_shopAttributes {
  id: number;
  created: Date;
  updated: Date;
  approved: boolean;
  name: string;
  description: string;
  logo: string;
  cover: string;
  user_id: string;
  delivery_cost: number;
  fixed_delivery: boolean;
  fixed_delivery_cost: number;
  location_id?: number;
}

export type api_shopPk = "id";
export type api_shopId = api_shop[api_shopPk];
export type api_shopOptionalAttributes = "id" | "location_id";
export type api_shopCreationAttributes = Optional<api_shopAttributes, api_shopOptionalAttributes>;

export class api_shop extends Model<api_shopAttributes, api_shopCreationAttributes> implements api_shopAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  approved!: boolean;
  name!: string;
  description!: string;
  logo!: string;
  cover!: string;
  user_id!: string;
  delivery_cost!: number;
  fixed_delivery!: boolean;
  fixed_delivery_cost!: number;
  location_id?: number;

  // api_shop belongsTo api_location via location_id
  location!: api_location;
  getLocation!: Sequelize.BelongsToGetAssociationMixin<api_location>;
  setLocation!: Sequelize.BelongsToSetAssociationMixin<api_location, api_locationId>;
  createLocation!: Sequelize.BelongsToCreateAssociationMixin<api_location>;
  // api_shop hasMany api_product via shop_id
  api_products!: api_product[];
  getApi_products!: Sequelize.HasManyGetAssociationsMixin<api_product>;
  setApi_products!: Sequelize.HasManySetAssociationsMixin<api_product, api_productId>;
  addApi_product!: Sequelize.HasManyAddAssociationMixin<api_product, api_productId>;
  addApi_products!: Sequelize.HasManyAddAssociationsMixin<api_product, api_productId>;
  createApi_product!: Sequelize.HasManyCreateAssociationMixin<api_product>;
  removeApi_product!: Sequelize.HasManyRemoveAssociationMixin<api_product, api_productId>;
  removeApi_products!: Sequelize.HasManyRemoveAssociationsMixin<api_product, api_productId>;
  hasApi_product!: Sequelize.HasManyHasAssociationMixin<api_product, api_productId>;
  hasApi_products!: Sequelize.HasManyHasAssociationsMixin<api_product, api_productId>;
  countApi_products!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_shop {
    return api_shop.init({
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
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cover: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    user_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    delivery_cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fixed_delivery: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    fixed_delivery_cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'api_location',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_shop',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_shop_location_id_9480655a",
        fields: [
          { name: "location_id" },
        ]
      },
      {
        name: "api_shop_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
