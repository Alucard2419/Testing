import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_product, api_productId } from './api_product';

export interface api_imageproductAttributes {
  id: number;
  created: Date;
  updated: Date;
  images: string;
  product_id: number;
}

export type api_imageproductPk = "id";
export type api_imageproductId = api_imageproduct[api_imageproductPk];
export type api_imageproductOptionalAttributes = "id";
export type api_imageproductCreationAttributes = Optional<api_imageproductAttributes, api_imageproductOptionalAttributes>;

export class api_imageproduct extends Model<api_imageproductAttributes, api_imageproductCreationAttributes> implements api_imageproductAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  images!: string;
  product_id!: number;

  // api_imageproduct belongsTo api_product via product_id
  product!: api_product;
  getProduct!: Sequelize.BelongsToGetAssociationMixin<api_product>;
  setProduct!: Sequelize.BelongsToSetAssociationMixin<api_product, api_productId>;
  createProduct!: Sequelize.BelongsToCreateAssociationMixin<api_product>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_imageproduct {
    return api_imageproduct.init({
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
    images: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_product',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_imageproduct',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_imageproduct_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_imageproduct_product_id_cd88438b",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
  }
}
