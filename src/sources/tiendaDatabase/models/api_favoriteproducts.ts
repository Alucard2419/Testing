import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_product, api_productId } from './api_product';

export interface api_favoriteproductsAttributes {
  id: number;
  created: Date;
  updated: Date;
  user_id: string;
  favorite_product_id: number;
}

export type api_favoriteproductsPk = "id";
export type api_favoriteproductsId = api_favoriteproducts[api_favoriteproductsPk];
export type api_favoriteproductsOptionalAttributes = "id";
export type api_favoriteproductsCreationAttributes = Optional<api_favoriteproductsAttributes, api_favoriteproductsOptionalAttributes>;

export class api_favoriteproducts extends Model<api_favoriteproductsAttributes, api_favoriteproductsCreationAttributes> implements api_favoriteproductsAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  user_id!: string;
  favorite_product_id!: number;

  // api_favoriteproducts belongsTo api_product via favorite_product_id
  favorite_product!: api_product;
  getFavorite_product!: Sequelize.BelongsToGetAssociationMixin<api_product>;
  setFavorite_product!: Sequelize.BelongsToSetAssociationMixin<api_product, api_productId>;
  createFavorite_product!: Sequelize.BelongsToCreateAssociationMixin<api_product>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_favoriteproducts {
    return api_favoriteproducts.init({
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
    user_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "user_can_only_block_user_one_time"
    },
    favorite_product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_product',
        key: 'id'
      },
      unique: "user_can_only_block_user_one_time"
    }
  }, {
    sequelize,
    tableName: 'api_favoriteproducts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_favoriteproducts_favorite_product_id_000ddebe",
        fields: [
          { name: "favorite_product_id" },
        ]
      },
      {
        name: "api_favoriteproducts_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "user_can_only_block_user_one_time",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "favorite_product_id" },
        ]
      },
    ]
  });
  }
}
