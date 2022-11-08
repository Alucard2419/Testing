import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_deliverydetails, api_deliverydetailsId } from './api_deliverydetails';
import type { api_imageinvoice, api_imageinvoiceId } from './api_imageinvoice';
import type { api_invoice_products_list, api_invoice_products_listId } from './api_invoice_products_list';

export interface api_invoiceAttributes {
  id: number;
  created: Date;
  updated: Date;
  external_id?: string;
  status: string;
  paymentmethod: string;
  user_id: string;
  price_include_taxes: boolean;
  delivery_details_id?: number;
  confirm_url?: string;
}

export type api_invoicePk = "id";
export type api_invoiceId = api_invoice[api_invoicePk];
export type api_invoiceOptionalAttributes = "id" | "external_id" | "delivery_details_id" | "confirm_url";
export type api_invoiceCreationAttributes = Optional<api_invoiceAttributes, api_invoiceOptionalAttributes>;

export class api_invoice extends Model<api_invoiceAttributes, api_invoiceCreationAttributes> implements api_invoiceAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  external_id?: string;
  status!: string;
  paymentmethod!: string;
  user_id!: string;
  price_include_taxes!: boolean;
  delivery_details_id?: number;
  confirm_url?: string;

  // api_invoice belongsTo api_deliverydetails via delivery_details_id
  delivery_detail!: api_deliverydetails;
  getDelivery_detail!: Sequelize.BelongsToGetAssociationMixin<api_deliverydetails>;
  setDelivery_detail!: Sequelize.BelongsToSetAssociationMixin<api_deliverydetails, api_deliverydetailsId>;
  createDelivery_detail!: Sequelize.BelongsToCreateAssociationMixin<api_deliverydetails>;
  // api_invoice hasMany api_imageinvoice via review_id
  api_imageinvoices!: api_imageinvoice[];
  getApi_imageinvoices!: Sequelize.HasManyGetAssociationsMixin<api_imageinvoice>;
  setApi_imageinvoices!: Sequelize.HasManySetAssociationsMixin<api_imageinvoice, api_imageinvoiceId>;
  addApi_imageinvoice!: Sequelize.HasManyAddAssociationMixin<api_imageinvoice, api_imageinvoiceId>;
  addApi_imageinvoices!: Sequelize.HasManyAddAssociationsMixin<api_imageinvoice, api_imageinvoiceId>;
  createApi_imageinvoice!: Sequelize.HasManyCreateAssociationMixin<api_imageinvoice>;
  removeApi_imageinvoice!: Sequelize.HasManyRemoveAssociationMixin<api_imageinvoice, api_imageinvoiceId>;
  removeApi_imageinvoices!: Sequelize.HasManyRemoveAssociationsMixin<api_imageinvoice, api_imageinvoiceId>;
  hasApi_imageinvoice!: Sequelize.HasManyHasAssociationMixin<api_imageinvoice, api_imageinvoiceId>;
  hasApi_imageinvoices!: Sequelize.HasManyHasAssociationsMixin<api_imageinvoice, api_imageinvoiceId>;
  countApi_imageinvoices!: Sequelize.HasManyCountAssociationsMixin;
  // api_invoice hasMany api_invoice_products_list via invoice_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof api_invoice {
    return api_invoice.init({
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
    external_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    paymentmethod: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    user_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    price_include_taxes: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    delivery_details_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'api_deliverydetails',
        key: 'id'
      },
      unique: "api_invoice_delivery_details_id_key"
    },
    confirm_url: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'api_invoice',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_invoice_delivery_details_id_key",
        unique: true,
        fields: [
          { name: "delivery_details_id" },
        ]
      },
      {
        name: "api_invoice_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
