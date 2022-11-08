import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_invoice, api_invoiceId } from './api_invoice';
import type { api_invoiceproduct, api_invoiceproductId } from './api_invoiceproduct';

export interface api_invoice_products_listAttributes {
  id: number;
  invoice_id: number;
  invoiceproduct_id: number;
}

export type api_invoice_products_listPk = "id";
export type api_invoice_products_listId = api_invoice_products_list[api_invoice_products_listPk];
export type api_invoice_products_listOptionalAttributes = "id";
export type api_invoice_products_listCreationAttributes = Optional<api_invoice_products_listAttributes, api_invoice_products_listOptionalAttributes>;

export class api_invoice_products_list extends Model<api_invoice_products_listAttributes, api_invoice_products_listCreationAttributes> implements api_invoice_products_listAttributes {
  id!: number;
  invoice_id!: number;
  invoiceproduct_id!: number;

  // api_invoice_products_list belongsTo api_invoice via invoice_id
  invoice!: api_invoice;
  getInvoice!: Sequelize.BelongsToGetAssociationMixin<api_invoice>;
  setInvoice!: Sequelize.BelongsToSetAssociationMixin<api_invoice, api_invoiceId>;
  createInvoice!: Sequelize.BelongsToCreateAssociationMixin<api_invoice>;
  // api_invoice_products_list belongsTo api_invoiceproduct via invoiceproduct_id
  invoiceproduct!: api_invoiceproduct;
  getInvoiceproduct!: Sequelize.BelongsToGetAssociationMixin<api_invoiceproduct>;
  setInvoiceproduct!: Sequelize.BelongsToSetAssociationMixin<api_invoiceproduct, api_invoiceproductId>;
  createInvoiceproduct!: Sequelize.BelongsToCreateAssociationMixin<api_invoiceproduct>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_invoice_products_list {
    return api_invoice_products_list.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_invoice',
        key: 'id'
      },
      unique: "api_invoice_products_lis_invoice_id_invoiceproduc_4bbcbe55_uniq"
    },
    invoiceproduct_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_invoiceproduct',
        key: 'id'
      },
      unique: "api_invoice_products_lis_invoice_id_invoiceproduc_4bbcbe55_uniq"
    }
  }, {
    sequelize,
    tableName: 'api_invoice_products_list',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_invoice_products_lis_invoice_id_invoiceproduc_4bbcbe55_uniq",
        unique: true,
        fields: [
          { name: "invoice_id" },
          { name: "invoiceproduct_id" },
        ]
      },
      {
        name: "api_invoice_products_list_invoice_id_99d3f971",
        fields: [
          { name: "invoice_id" },
        ]
      },
      {
        name: "api_invoice_products_list_invoiceproduct_id_83cb9b38",
        fields: [
          { name: "invoiceproduct_id" },
        ]
      },
      {
        name: "api_invoice_products_list_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
