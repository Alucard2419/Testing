import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_favoriteproducts, api_favoriteproductsId } from './api_favoriteproducts';
import type { api_imageproduct, api_imageproductId } from './api_imageproduct';
import type { api_invoiceproduct, api_invoiceproductId } from './api_invoiceproduct';
import type { api_product_review, api_product_reviewId } from './api_product_review';
import type { api_section, api_sectionId } from './api_section';
import type { api_shop, api_shopId } from './api_shop';

export interface api_productAttributes {
  id: number;
  created: Date;
  updated: Date;
  name: string;
  price: number;
  description: string;
  extra_info: string;
  stock: number;
  shop_id: number;
  section_id: number;
  main_image: string;
}

export type api_productPk = "id";
export type api_productId = api_product[api_productPk];
export type api_productOptionalAttributes = "id";
export type api_productCreationAttributes = Optional<api_productAttributes, api_productOptionalAttributes>;

export class api_product extends Model<api_productAttributes, api_productCreationAttributes> implements api_productAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  name!: string;
  price!: number;
  description!: string;
  extra_info!: string;
  stock!: number;
  shop_id!: number;
  section_id!: number;
  main_image!: string;

  // api_product hasMany api_favoriteproducts via favorite_product_id
  api_favoriteproducts!: api_favoriteproducts[];
  getApi_favoriteproducts!: Sequelize.HasManyGetAssociationsMixin<api_favoriteproducts>;
  setApi_favoriteproducts!: Sequelize.HasManySetAssociationsMixin<api_favoriteproducts, api_favoriteproductsId>;
  addApi_favoriteproduct!: Sequelize.HasManyAddAssociationMixin<api_favoriteproducts, api_favoriteproductsId>;
  addApi_favoriteproducts!: Sequelize.HasManyAddAssociationsMixin<api_favoriteproducts, api_favoriteproductsId>;
  createApi_favoriteproduct!: Sequelize.HasManyCreateAssociationMixin<api_favoriteproducts>;
  removeApi_favoriteproduct!: Sequelize.HasManyRemoveAssociationMixin<api_favoriteproducts, api_favoriteproductsId>;
  removeApi_favoriteproducts!: Sequelize.HasManyRemoveAssociationsMixin<api_favoriteproducts, api_favoriteproductsId>;
  hasApi_favoriteproduct!: Sequelize.HasManyHasAssociationMixin<api_favoriteproducts, api_favoriteproductsId>;
  hasApi_favoriteproducts!: Sequelize.HasManyHasAssociationsMixin<api_favoriteproducts, api_favoriteproductsId>;
  countApi_favoriteproducts!: Sequelize.HasManyCountAssociationsMixin;
  // api_product hasMany api_imageproduct via product_id
  api_imageproducts!: api_imageproduct[];
  getApi_imageproducts!: Sequelize.HasManyGetAssociationsMixin<api_imageproduct>;
  setApi_imageproducts!: Sequelize.HasManySetAssociationsMixin<api_imageproduct, api_imageproductId>;
  addApi_imageproduct!: Sequelize.HasManyAddAssociationMixin<api_imageproduct, api_imageproductId>;
  addApi_imageproducts!: Sequelize.HasManyAddAssociationsMixin<api_imageproduct, api_imageproductId>;
  createApi_imageproduct!: Sequelize.HasManyCreateAssociationMixin<api_imageproduct>;
  removeApi_imageproduct!: Sequelize.HasManyRemoveAssociationMixin<api_imageproduct, api_imageproductId>;
  removeApi_imageproducts!: Sequelize.HasManyRemoveAssociationsMixin<api_imageproduct, api_imageproductId>;
  hasApi_imageproduct!: Sequelize.HasManyHasAssociationMixin<api_imageproduct, api_imageproductId>;
  hasApi_imageproducts!: Sequelize.HasManyHasAssociationsMixin<api_imageproduct, api_imageproductId>;
  countApi_imageproducts!: Sequelize.HasManyCountAssociationsMixin;
  // api_product hasMany api_invoiceproduct via productId_id
  api_invoiceproducts!: api_invoiceproduct[];
  getApi_invoiceproducts!: Sequelize.HasManyGetAssociationsMixin<api_invoiceproduct>;
  setApi_invoiceproducts!: Sequelize.HasManySetAssociationsMixin<api_invoiceproduct, api_invoiceproductId>;
  addApi_invoiceproduct!: Sequelize.HasManyAddAssociationMixin<api_invoiceproduct, api_invoiceproductId>;
  addApi_invoiceproducts!: Sequelize.HasManyAddAssociationsMixin<api_invoiceproduct, api_invoiceproductId>;
  createApi_invoiceproduct!: Sequelize.HasManyCreateAssociationMixin<api_invoiceproduct>;
  removeApi_invoiceproduct!: Sequelize.HasManyRemoveAssociationMixin<api_invoiceproduct, api_invoiceproductId>;
  removeApi_invoiceproducts!: Sequelize.HasManyRemoveAssociationsMixin<api_invoiceproduct, api_invoiceproductId>;
  hasApi_invoiceproduct!: Sequelize.HasManyHasAssociationMixin<api_invoiceproduct, api_invoiceproductId>;
  hasApi_invoiceproducts!: Sequelize.HasManyHasAssociationsMixin<api_invoiceproduct, api_invoiceproductId>;
  countApi_invoiceproducts!: Sequelize.HasManyCountAssociationsMixin;
  // api_product hasMany api_product_review via to_product_id
  api_product_reviews!: api_product_review[];
  getApi_product_reviews!: Sequelize.HasManyGetAssociationsMixin<api_product_review>;
  setApi_product_reviews!: Sequelize.HasManySetAssociationsMixin<api_product_review, api_product_reviewId>;
  addApi_product_review!: Sequelize.HasManyAddAssociationMixin<api_product_review, api_product_reviewId>;
  addApi_product_reviews!: Sequelize.HasManyAddAssociationsMixin<api_product_review, api_product_reviewId>;
  createApi_product_review!: Sequelize.HasManyCreateAssociationMixin<api_product_review>;
  removeApi_product_review!: Sequelize.HasManyRemoveAssociationMixin<api_product_review, api_product_reviewId>;
  removeApi_product_reviews!: Sequelize.HasManyRemoveAssociationsMixin<api_product_review, api_product_reviewId>;
  hasApi_product_review!: Sequelize.HasManyHasAssociationMixin<api_product_review, api_product_reviewId>;
  hasApi_product_reviews!: Sequelize.HasManyHasAssociationsMixin<api_product_review, api_product_reviewId>;
  countApi_product_reviews!: Sequelize.HasManyCountAssociationsMixin;
  // api_product belongsTo api_section via section_id
  section!: api_section;
  getSection!: Sequelize.BelongsToGetAssociationMixin<api_section>;
  setSection!: Sequelize.BelongsToSetAssociationMixin<api_section, api_sectionId>;
  createSection!: Sequelize.BelongsToCreateAssociationMixin<api_section>;
  // api_product belongsTo api_shop via shop_id
  shop!: api_shop;
  getShop!: Sequelize.BelongsToGetAssociationMixin<api_shop>;
  setShop!: Sequelize.BelongsToSetAssociationMixin<api_shop, api_shopId>;
  createShop!: Sequelize.BelongsToCreateAssociationMixin<api_shop>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_product {
    return api_product.init({
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
      type: DataTypes.STRING(60),
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    extra_info: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_shop',
        key: 'id'
      }
    },
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_section',
        key: 'id'
      }
    },
    main_image: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'api_product',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_product_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_product_section_id_49bf2bdf",
        fields: [
          { name: "section_id" },
        ]
      },
      {
        name: "api_product_shop_id_5239076e",
        fields: [
          { name: "shop_id" },
        ]
      },
    ]
  });
  }
}
