import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_membership_details, api_membership_detailsId } from './api_membership_details';
import type { api_membership_permissions, api_membership_permissionsId } from './api_membership_permissions';
import type { api_payment, api_paymentId } from './api_payment';
import type { api_profile, api_profileId } from './api_profile';

export interface api_membershipAttributes {
  id: number;
  es_name: string;
  en_name: string;
  priority: number;
  monthly_cost: number;
  yearly_cost: number;
  max_services_amount: number;
  max_gallery_size: number;
  validity_time: number;
  for_sale: boolean;
  image?: string;
  promoted: boolean;
  monthly_cost_USD: number;
  yearly_cost_USD: number;
  image_png?: string;
  monthly_invoices: number;
}

export type api_membershipPk = "id";
export type api_membershipId = api_membership[api_membershipPk];
export type api_membershipOptionalAttributes = "id" | "image" | "image_png";
export type api_membershipCreationAttributes = Optional<api_membershipAttributes, api_membershipOptionalAttributes>;

export class api_membership extends Model<api_membershipAttributes, api_membershipCreationAttributes> implements api_membershipAttributes {
  id!: number;
  es_name!: string;
  en_name!: string;
  priority!: number;
  monthly_cost!: number;
  yearly_cost!: number;
  max_services_amount!: number;
  max_gallery_size!: number;
  validity_time!: number;
  for_sale!: boolean;
  image?: string;
  promoted!: boolean;
  monthly_cost_USD!: number;
  yearly_cost_USD!: number;
  image_png?: string;
  monthly_invoices!: number;

  // api_membership hasMany api_membership_details via membership_id
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
  // api_membership hasMany api_membership_permissions via membership_id
  api_membership_permissions!: api_membership_permissions[];
  getApi_membership_permissions!: Sequelize.HasManyGetAssociationsMixin<api_membership_permissions>;
  setApi_membership_permissions!: Sequelize.HasManySetAssociationsMixin<api_membership_permissions, api_membership_permissionsId>;
  addApi_membership_permission!: Sequelize.HasManyAddAssociationMixin<api_membership_permissions, api_membership_permissionsId>;
  addApi_membership_permissions!: Sequelize.HasManyAddAssociationsMixin<api_membership_permissions, api_membership_permissionsId>;
  createApi_membership_permission!: Sequelize.HasManyCreateAssociationMixin<api_membership_permissions>;
  removeApi_membership_permission!: Sequelize.HasManyRemoveAssociationMixin<api_membership_permissions, api_membership_permissionsId>;
  removeApi_membership_permissions!: Sequelize.HasManyRemoveAssociationsMixin<api_membership_permissions, api_membership_permissionsId>;
  hasApi_membership_permission!: Sequelize.HasManyHasAssociationMixin<api_membership_permissions, api_membership_permissionsId>;
  hasApi_membership_permissions!: Sequelize.HasManyHasAssociationsMixin<api_membership_permissions, api_membership_permissionsId>;
  countApi_membership_permissions!: Sequelize.HasManyCountAssociationsMixin;
  // api_membership hasMany api_payment via membership_id
  api_payments!: api_payment[];
  getApi_payments!: Sequelize.HasManyGetAssociationsMixin<api_payment>;
  setApi_payments!: Sequelize.HasManySetAssociationsMixin<api_payment, api_paymentId>;
  addApi_payment!: Sequelize.HasManyAddAssociationMixin<api_payment, api_paymentId>;
  addApi_payments!: Sequelize.HasManyAddAssociationsMixin<api_payment, api_paymentId>;
  createApi_payment!: Sequelize.HasManyCreateAssociationMixin<api_payment>;
  removeApi_payment!: Sequelize.HasManyRemoveAssociationMixin<api_payment, api_paymentId>;
  removeApi_payments!: Sequelize.HasManyRemoveAssociationsMixin<api_payment, api_paymentId>;
  hasApi_payment!: Sequelize.HasManyHasAssociationMixin<api_payment, api_paymentId>;
  hasApi_payments!: Sequelize.HasManyHasAssociationsMixin<api_payment, api_paymentId>;
  countApi_payments!: Sequelize.HasManyCountAssociationsMixin;
  // api_membership hasMany api_profile via membership_id
  api_profiles!: api_profile[];
  getApi_profiles!: Sequelize.HasManyGetAssociationsMixin<api_profile>;
  setApi_profiles!: Sequelize.HasManySetAssociationsMixin<api_profile, api_profileId>;
  addApi_profile!: Sequelize.HasManyAddAssociationMixin<api_profile, api_profileId>;
  addApi_profiles!: Sequelize.HasManyAddAssociationsMixin<api_profile, api_profileId>;
  createApi_profile!: Sequelize.HasManyCreateAssociationMixin<api_profile>;
  removeApi_profile!: Sequelize.HasManyRemoveAssociationMixin<api_profile, api_profileId>;
  removeApi_profiles!: Sequelize.HasManyRemoveAssociationsMixin<api_profile, api_profileId>;
  hasApi_profile!: Sequelize.HasManyHasAssociationMixin<api_profile, api_profileId>;
  hasApi_profiles!: Sequelize.HasManyHasAssociationsMixin<api_profile, api_profileId>;
  countApi_profiles!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_membership {
    return api_membership.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    es_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: "api_membership_es_name_key"
    },
    en_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: "api_membership_en_name_key"
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    monthly_cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    yearly_cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    max_services_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    max_gallery_size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    validity_time: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    for_sale: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    promoted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    monthly_cost_USD: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    yearly_cost_USD: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image_png: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    monthly_invoices: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'api_membership',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_membership_en_name_48ea16db_like",
        fields: [
          { name: "en_name" },
        ]
      },
      {
        name: "api_membership_en_name_key",
        unique: true,
        fields: [
          { name: "en_name" },
        ]
      },
      {
        name: "api_membership_es_name_6711d575_like",
        fields: [
          { name: "es_name" },
        ]
      },
      {
        name: "api_membership_es_name_key",
        unique: true,
        fields: [
          { name: "es_name" },
        ]
      },
      {
        name: "api_membership_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
