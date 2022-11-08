import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_invoice, api_invoiceId } from './api_invoice';

export interface api_productininvoiceAttributes {
  id: number;
  name: string;
  description?: string;
  quantity: number;
  price: number;
  invoice_id: number;
}

export type api_productininvoicePk = "id";
export type api_productininvoiceId = api_productininvoice[api_productininvoicePk];
export type api_productininvoiceOptionalAttributes = "id" | "description";
export type api_productininvoiceCreationAttributes = Optional<api_productininvoiceAttributes, api_productininvoiceOptionalAttributes>;

export class api_productininvoice extends Model<api_productininvoiceAttributes, api_productininvoiceCreationAttributes> implements api_productininvoiceAttributes {
  id!: number;
  name!: string;
  description?: string;
  quantity!: number;
  price!: number;
  invoice_id!: number;

  // api_productininvoice belongsTo api_invoice via invoice_id
  invoice!: api_invoice;
  getInvoice!: Sequelize.BelongsToGetAssociationMixin<api_invoice>;
  setInvoice!: Sequelize.BelongsToSetAssociationMixin<api_invoice, api_invoiceId>;
  createInvoice!: Sequelize.BelongsToCreateAssociationMixin<api_invoice>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_productininvoice {
    return api_productininvoice.init({
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
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_invoice',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_productininvoice',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_productininvoice_invoice_id_d6eaf475",
        fields: [
          { name: "invoice_id" },
        ]
      },
      {
        name: "api_productininvoice_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
