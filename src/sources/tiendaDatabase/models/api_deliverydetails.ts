import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_invoice, api_invoiceCreationAttributes, api_invoiceId } from './api_invoice';

export interface api_deliverydetailsAttributes {
  id: number;
  created: Date;
  updated: Date;
  name: string;
  last_name: string;
  email: string;
  city: string;
  state: string;
  zip_code: number;
  phone: string;
  country: string;
}

export type api_deliverydetailsPk = "id";
export type api_deliverydetailsId = api_deliverydetails[api_deliverydetailsPk];
export type api_deliverydetailsOptionalAttributes = "id";
export type api_deliverydetailsCreationAttributes = Optional<api_deliverydetailsAttributes, api_deliverydetailsOptionalAttributes>;

export class api_deliverydetails extends Model<api_deliverydetailsAttributes, api_deliverydetailsCreationAttributes> implements api_deliverydetailsAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  name!: string;
  last_name!: string;
  email!: string;
  city!: string;
  state!: string;
  zip_code!: number;
  phone!: string;
  country!: string;

  // api_deliverydetails hasOne api_invoice via delivery_details_id
  api_invoice!: api_invoice;
  getApi_invoice!: Sequelize.HasOneGetAssociationMixin<api_invoice>;
  setApi_invoice!: Sequelize.HasOneSetAssociationMixin<api_invoice, api_invoiceId>;
  createApi_invoice!: Sequelize.HasOneCreateAssociationMixin<api_invoice>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_deliverydetails {
    return api_deliverydetails.init({
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
      type: DataTypes.STRING(20),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'api_deliverydetails',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_deliverydetails_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
