import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_imagereview, api_imagereviewId } from './api_imagereview';
import type { api_product, api_productId } from './api_product';

export interface api_product_reviewAttributes {
  id: number;
  created: Date;
  updated: Date;
  approved: boolean;
  rating: number;
  text: string;
  user_id: string;
  to_product_id: number;
}

export type api_product_reviewPk = "id";
export type api_product_reviewId = api_product_review[api_product_reviewPk];
export type api_product_reviewOptionalAttributes = "id";
export type api_product_reviewCreationAttributes = Optional<api_product_reviewAttributes, api_product_reviewOptionalAttributes>;

export class api_product_review extends Model<api_product_reviewAttributes, api_product_reviewCreationAttributes> implements api_product_reviewAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  approved!: boolean;
  rating!: number;
  text!: string;
  user_id!: string;
  to_product_id!: number;

  // api_product_review belongsTo api_product via to_product_id
  to_product!: api_product;
  getTo_product!: Sequelize.BelongsToGetAssociationMixin<api_product>;
  setTo_product!: Sequelize.BelongsToSetAssociationMixin<api_product, api_productId>;
  createTo_product!: Sequelize.BelongsToCreateAssociationMixin<api_product>;
  // api_product_review hasMany api_imagereview via review_id
  api_imagereviews!: api_imagereview[];
  getApi_imagereviews!: Sequelize.HasManyGetAssociationsMixin<api_imagereview>;
  setApi_imagereviews!: Sequelize.HasManySetAssociationsMixin<api_imagereview, api_imagereviewId>;
  addApi_imagereview!: Sequelize.HasManyAddAssociationMixin<api_imagereview, api_imagereviewId>;
  addApi_imagereviews!: Sequelize.HasManyAddAssociationsMixin<api_imagereview, api_imagereviewId>;
  createApi_imagereview!: Sequelize.HasManyCreateAssociationMixin<api_imagereview>;
  removeApi_imagereview!: Sequelize.HasManyRemoveAssociationMixin<api_imagereview, api_imagereviewId>;
  removeApi_imagereviews!: Sequelize.HasManyRemoveAssociationsMixin<api_imagereview, api_imagereviewId>;
  hasApi_imagereview!: Sequelize.HasManyHasAssociationMixin<api_imagereview, api_imagereviewId>;
  hasApi_imagereviews!: Sequelize.HasManyHasAssociationsMixin<api_imagereview, api_imagereviewId>;
  countApi_imagereviews!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_product_review {
    return api_product_review.init({
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
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "user_can_only_make_one_review_in_each_service"
    },
    to_product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_product',
        key: 'id'
      },
      unique: "user_can_only_make_one_review_in_each_service"
    }
  }, {
    sequelize,
    tableName: 'api_product_review',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_product_review_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_product_review_to_product_id_2f172be8",
        fields: [
          { name: "to_product_id" },
        ]
      },
      {
        name: "user_can_only_make_one_review_in_each_service",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "to_product_id" },
        ]
      },
    ]
  });
  }
}
