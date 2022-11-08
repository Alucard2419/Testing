import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_membership_details, api_membership_detailsId } from './api_membership_details';

export interface api_membershipdetailsAttributes {
  id: number;
  created: Date;
  updated: Date;
  es_name: string;
  en_name: string;
}

export type api_membershipdetailsPk = "id";
export type api_membershipdetailsId = api_membershipdetails[api_membershipdetailsPk];
export type api_membershipdetailsOptionalAttributes = "id";
export type api_membershipdetailsCreationAttributes = Optional<api_membershipdetailsAttributes, api_membershipdetailsOptionalAttributes>;

export class api_membershipdetails extends Model<api_membershipdetailsAttributes, api_membershipdetailsCreationAttributes> implements api_membershipdetailsAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  es_name!: string;
  en_name!: string;

  // api_membershipdetails hasMany api_membership_details via membershipdetails_id
  api_membership_details!: api_membership_details[];
  getApi_membership_details!: Sequelize.HasManyGetAssociationsMixin<api_membership_details>;
  setApi_membership_details!: Sequelize.HasManySetAssociationsMixin<api_membership_details, api_membership_detailsId>;
  addApi_membership_detail!: Sequelize.HasManyAddAssociationMixin<api_membership_details, api_membership_detailsId>;
  addApi_membership_details!: Sequelize.HasManyAddAssociationsMixin<api_membership_details, api_membership_detailsId>;
  createApi_membership_detail!: Sequelize.HasManyCreateAssociationMixin<api_membership_details>;
  removeApi_membership_detail!: Sequelize.HasManyRemoveAssociationMixin<api_membership_details, api_membership_detailsId>;
  removeApi_membership_details!: Sequelize.HasManyRemoveAssociationsMixin<api_membership_details, api_membership_detailsId>;
  hasApi_membership_detail!: Sequelize.HasManyHasAssociationMixin<api_membership_details, api_membership_detailsId>;
  hasApi_membership_details!: Sequelize.HasManyHasAssociationsMixin<api_membership_details, api_membership_detailsId>;
  countApi_membership_details!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_membershipdetails {
    return api_membershipdetails.init({
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
    es_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "api_membershipdetails_es_name_key"
    },
    en_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "api_membershipdetails_en_name_key"
    }
  }, {
    sequelize,
    tableName: 'api_membershipdetails',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_membershipdetails_en_name_9bfa429e_like",
        fields: [
          { name: "en_name" },
        ]
      },
      {
        name: "api_membershipdetails_en_name_key",
        unique: true,
        fields: [
          { name: "en_name" },
        ]
      },
      {
        name: "api_membershipdetails_es_name_6eca0008_like",
        fields: [
          { name: "es_name" },
        ]
      },
      {
        name: "api_membershipdetails_es_name_key",
        unique: true,
        fields: [
          { name: "es_name" },
        ]
      },
      {
        name: "api_membershipdetails_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
