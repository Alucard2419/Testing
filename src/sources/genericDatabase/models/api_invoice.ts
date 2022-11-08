import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_productininvoice, api_productininvoiceId } from './api_productininvoice';
import type { api_profile, api_profileId } from './api_profile';
import type { api_service, api_serviceId } from './api_service';

export interface api_invoiceAttributes {
  id: number;
  from_service_id: number;
  to_user_id: number;
  datetime_of_payment: Date;
  order_id?: string;
  status: string;
  currency: string;
  external_id?: string;
  order_number?: string;
  payment_creation_date: Date;
  monto1?: string;
}

export type api_invoicePk = "id";
export type api_invoiceId = api_invoice[api_invoicePk];
export type api_invoiceOptionalAttributes = "id" | "order_id" | "external_id" | "order_number" | "monto1";
export type api_invoiceCreationAttributes = Optional<api_invoiceAttributes, api_invoiceOptionalAttributes>;

export class api_invoice extends Model<api_invoiceAttributes, api_invoiceCreationAttributes> implements api_invoiceAttributes {
  id!: number;
  from_service_id!: number;
  to_user_id!: number;
  datetime_of_payment!: Date;
  order_id?: string;
  status!: string;
  currency!: string;
  external_id?: string;
  order_number?: string;
  payment_creation_date!: Date;
  monto1?: string;

  // api_invoice hasMany api_productininvoice via invoice_id
  api_productininvoices!: api_productininvoice[];
  getApi_productininvoices!: Sequelize.HasManyGetAssociationsMixin<api_productininvoice>;
  setApi_productininvoices!: Sequelize.HasManySetAssociationsMixin<api_productininvoice, api_productininvoiceId>;
  addApi_productininvoice!: Sequelize.HasManyAddAssociationMixin<api_productininvoice, api_productininvoiceId>;
  addApi_productininvoices!: Sequelize.HasManyAddAssociationsMixin<api_productininvoice, api_productininvoiceId>;
  createApi_productininvoice!: Sequelize.HasManyCreateAssociationMixin<api_productininvoice>;
  removeApi_productininvoice!: Sequelize.HasManyRemoveAssociationMixin<api_productininvoice, api_productininvoiceId>;
  removeApi_productininvoices!: Sequelize.HasManyRemoveAssociationsMixin<api_productininvoice, api_productininvoiceId>;
  hasApi_productininvoice!: Sequelize.HasManyHasAssociationMixin<api_productininvoice, api_productininvoiceId>;
  hasApi_productininvoices!: Sequelize.HasManyHasAssociationsMixin<api_productininvoice, api_productininvoiceId>;
  countApi_productininvoices!: Sequelize.HasManyCountAssociationsMixin;
  // api_invoice belongsTo api_profile via to_user_id
  to_user!: api_profile;
  getTo_user!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setTo_user!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createTo_user!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;
  // api_invoice belongsTo api_service via from_service_id
  from_service!: api_service;
  getFrom_service!: Sequelize.BelongsToGetAssociationMixin<api_service>;
  setFrom_service!: Sequelize.BelongsToSetAssociationMixin<api_service, api_serviceId>;
  createFrom_service!: Sequelize.BelongsToCreateAssociationMixin<api_service>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_invoice {
    return api_invoice.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    from_service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_service',
        key: 'id'
      }
    },
    to_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_profile',
        key: 'id'
      }
    },
    datetime_of_payment: {
      type: DataTypes.DATE,
      allowNull: false
    },
    order_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "api_invoice_order_id_key"
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    external_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    order_number: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payment_creation_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    monto1: {
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
        name: "api_invoice_from_service_id_a472fd83",
        fields: [
          { name: "from_service_id" },
        ]
      },
      {
        name: "api_invoice_order_id_d52c1a5c_like",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "api_invoice_order_id_key",
        unique: true,
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "api_invoice_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_invoice_to_user_id_ca504443",
        fields: [
          { name: "to_user_id" },
        ]
      },
    ]
  });
  }
}
