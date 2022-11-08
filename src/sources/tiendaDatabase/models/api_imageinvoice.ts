import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_invoice, api_invoiceId } from './api_invoice';

export interface api_imageinvoiceAttributes {
  id: number;
  created: Date;
  updated: Date;
  images: string;
  review_id: number;
}

export type api_imageinvoicePk = "id";
export type api_imageinvoiceId = api_imageinvoice[api_imageinvoicePk];
export type api_imageinvoiceOptionalAttributes = "id";
export type api_imageinvoiceCreationAttributes = Optional<api_imageinvoiceAttributes, api_imageinvoiceOptionalAttributes>;

export class api_imageinvoice extends Model<api_imageinvoiceAttributes, api_imageinvoiceCreationAttributes> implements api_imageinvoiceAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  images!: string;
  review_id!: number;

  // api_imageinvoice belongsTo api_invoice via review_id
  review!: api_invoice;
  getReview!: Sequelize.BelongsToGetAssociationMixin<api_invoice>;
  setReview!: Sequelize.BelongsToSetAssociationMixin<api_invoice, api_invoiceId>;
  createReview!: Sequelize.BelongsToCreateAssociationMixin<api_invoice>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_imageinvoice {
    return api_imageinvoice.init({
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
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_invoice',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_imageinvoice',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_imageinvoice_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_imageinvoice_review_id_aaa699ac",
        fields: [
          { name: "review_id" },
        ]
      },
    ]
  });
  }
}
