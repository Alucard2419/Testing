import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_invoice_products_list, api_invoice_products_listId } from './api_invoice_products_list';
import type { api_product, api_productId } from './api_product';

export interface api_invoiceproductAttributes {
  id: number;
  created: Date;
  updated: Date;
  quantity: number;
  productId_id: number;
}

export type api_invoiceproductPk = "id";
export type api_invoiceproductId = api_invoiceproduct[api_invoiceproductPk];
export type api_invoiceproductOptionalAttributes = "id";
export type api_invoiceproductCreationAttributes = Optional<api_invoiceproductAttributes, api_invoiceproductOptionalAttributes>;

export class api_invoiceproduct extends Model<api_invoiceproductAttributes, api_invoiceproductCreationAttributes> implements api_invoiceproductAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  quantity!: number;
  productId_id!: number;

  // api_invoiceproduct hasMany api_invoice_products_list via invoiceproduct_id
  api_invoice_products_lists!: api_invoice_products_list[];
  getApi_invoice_products_lists!: Sequelize.HasManyGetAssociationsMixin<api_invoice_products_list>;
  setApi_invoice_products_lists!: Sequelize.HasManySetAssociationsMixin<api_invoice_products_list, api_invoice_products_listId>;
  addApi_invoice_products_list!: Sequelize.HasManyAddAssociationMixin<api_invoice_products_list, api_invoice_products_listId>;
  addApi_invoice_products_lists!: Sequelize.HasManyAddAssociationsMixin<api_invoice_products_list, api_invoice_products_listId>;
  createApi_invoice_products_list!: Sequelize.HasManyCreateAssociationMixin<api_invoice_products_list>;
  removeApi_invoice_products_list!: Sequelize.HasManyRemoveAssociationMixin<api_invoice_products_list, api_invoice_products_listId>;
  removeApi_invoice_products_lists!: Sequelize.HasManyRemoveAssociationsMixin<api_invoice_products_list, api_invoice_products_listId>;
  hasApi_invoice_products_list!: Sequelize.HasManyHasAssociationMixin<api_invoice_products_list, api_invoice_products_listId>;
  hasApi_invoice_products_lists!: Sequelize.HasManyHasAssociationsMixin<api_invoice_products_list, api_invoice_products_listId>;
  countApi_invoice_products_lists!: Sequelize.HasManyCountAssociationsMixin;
  // api_invoiceproduct belongsTo api_product via productId_id
  productId!: api_product;
  getProductId!: Sequelize.BelongsToGetAssociationMixin<api_product>;
  setProductId!: Sequelize.BelongsToSetAssociationMixin<api_product, api_productId>;
  createProductId!: Sequelize.BelongsToCreateAssociationMixin<api_product>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_invoiceproduct {
    return api_invoiceproduct.init({
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
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productId_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_product',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_invoiceproduct',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_invoiceproduct_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_invoiceproduct_product_id_43cf9c43",
        fields: [
          { name: "productId_id" },
        ]
      },
    ]
  });
  }
}
