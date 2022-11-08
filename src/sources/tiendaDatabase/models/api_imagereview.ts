import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_product_review, api_product_reviewId } from './api_product_review';

export interface api_imagereviewAttributes {
  id: number;
  created: Date;
  updated: Date;
  images: string;
  review_id: number;
}

export type api_imagereviewPk = "id";
export type api_imagereviewId = api_imagereview[api_imagereviewPk];
export type api_imagereviewOptionalAttributes = "id";
export type api_imagereviewCreationAttributes = Optional<api_imagereviewAttributes, api_imagereviewOptionalAttributes>;

export class api_imagereview extends Model<api_imagereviewAttributes, api_imagereviewCreationAttributes> implements api_imagereviewAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  images!: string;
  review_id!: number;

  // api_imagereview belongsTo api_product_review via review_id
  review!: api_product_review;
  getReview!: Sequelize.BelongsToGetAssociationMixin<api_product_review>;
  setReview!: Sequelize.BelongsToSetAssociationMixin<api_product_review, api_product_reviewId>;
  createReview!: Sequelize.BelongsToCreateAssociationMixin<api_product_review>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_imagereview {
    return api_imagereview.init({
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
        model: 'api_product_review',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_imagereview',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_imagereview_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_imagereview_review_id_e6fc4e65",
        fields: [
          { name: "review_id" },
        ]
      },
    ]
  });
  }
}
