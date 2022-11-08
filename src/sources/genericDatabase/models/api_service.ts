import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_category, api_categoryId } from './api_category';
import type { api_chatroom, api_chatroomId } from './api_chatroom';
import type { api_invoice, api_invoiceId } from './api_invoice';
import type { api_municipality, api_municipalityId } from './api_municipality';
import type { api_profile, api_profileId } from './api_profile';
import type { api_review, api_reviewId } from './api_review';
import type { api_schedule, api_scheduleId } from './api_schedule';
import type { api_service_followers, api_service_followersId } from './api_service_followers';
import type { api_servicereport, api_servicereportId } from './api_servicereport';
import type { api_servicevisit, api_servicevisitId } from './api_servicevisit';

export interface api_serviceAttributes {
  id: number;
  created: Date;
  updated: Date;
  approved: boolean;
  name: string;
  description: string;
  telephone: string;
  cellphone: string;
  email: string;
  website?: string;
  logo: string;
  cover: string;
  lat?: number;
  lng?: number;
  address: string;
  expiration_date: Date;
  number_of_reviews: number;
  average_rating: number;
  category_id: number;
  municipality_id: number;
  owner_id: number;
}

export type api_servicePk = "id";
export type api_serviceId = api_service[api_servicePk];
export type api_serviceOptionalAttributes = "id" | "website" | "lat" | "lng";
export type api_serviceCreationAttributes = Optional<api_serviceAttributes, api_serviceOptionalAttributes>;

export class api_service extends Model<api_serviceAttributes, api_serviceCreationAttributes> implements api_serviceAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  approved!: boolean;
  name!: string;
  description!: string;
  telephone!: string;
  cellphone!: string;
  email!: string;
  website?: string;
  logo!: string;
  cover!: string;
  lat?: number;
  lng?: number;
  address!: string;
  expiration_date!: Date;
  number_of_reviews!: number;
  average_rating!: number;
  category_id!: number;
  municipality_id!: number;
  owner_id!: number;

  // api_service belongsTo api_category via category_id
  category!: api_category;
  getCategory!: Sequelize.BelongsToGetAssociationMixin<api_category>;
  setCategory!: Sequelize.BelongsToSetAssociationMixin<api_category, api_categoryId>;
  createCategory!: Sequelize.BelongsToCreateAssociationMixin<api_category>;
  // api_service belongsTo api_municipality via municipality_id
  municipality!: api_municipality;
  getMunicipality!: Sequelize.BelongsToGetAssociationMixin<api_municipality>;
  setMunicipality!: Sequelize.BelongsToSetAssociationMixin<api_municipality, api_municipalityId>;
  createMunicipality!: Sequelize.BelongsToCreateAssociationMixin<api_municipality>;
  // api_service belongsTo api_profile via owner_id
  owner!: api_profile;
  getOwner!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setOwner!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createOwner!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;
  // api_service hasMany api_chatroom via service_id
  api_chatrooms!: api_chatroom[];
  getApi_chatrooms!: Sequelize.HasManyGetAssociationsMixin<api_chatroom>;
  setApi_chatrooms!: Sequelize.HasManySetAssociationsMixin<api_chatroom, api_chatroomId>;
  addApi_chatroom!: Sequelize.HasManyAddAssociationMixin<api_chatroom, api_chatroomId>;
  addApi_chatrooms!: Sequelize.HasManyAddAssociationsMixin<api_chatroom, api_chatroomId>;
  createApi_chatroom!: Sequelize.HasManyCreateAssociationMixin<api_chatroom>;
  removeApi_chatroom!: Sequelize.HasManyRemoveAssociationMixin<api_chatroom, api_chatroomId>;
  removeApi_chatrooms!: Sequelize.HasManyRemoveAssociationsMixin<api_chatroom, api_chatroomId>;
  hasApi_chatroom!: Sequelize.HasManyHasAssociationMixin<api_chatroom, api_chatroomId>;
  hasApi_chatrooms!: Sequelize.HasManyHasAssociationsMixin<api_chatroom, api_chatroomId>;
  countApi_chatrooms!: Sequelize.HasManyCountAssociationsMixin;
  // api_service hasMany api_invoice via from_service_id
  api_invoices!: api_invoice[];
  getApi_invoices!: Sequelize.HasManyGetAssociationsMixin<api_invoice>;
  setApi_invoices!: Sequelize.HasManySetAssociationsMixin<api_invoice, api_invoiceId>;
  addApi_invoice!: Sequelize.HasManyAddAssociationMixin<api_invoice, api_invoiceId>;
  addApi_invoices!: Sequelize.HasManyAddAssociationsMixin<api_invoice, api_invoiceId>;
  createApi_invoice!: Sequelize.HasManyCreateAssociationMixin<api_invoice>;
  removeApi_invoice!: Sequelize.HasManyRemoveAssociationMixin<api_invoice, api_invoiceId>;
  removeApi_invoices!: Sequelize.HasManyRemoveAssociationsMixin<api_invoice, api_invoiceId>;
  hasApi_invoice!: Sequelize.HasManyHasAssociationMixin<api_invoice, api_invoiceId>;
  hasApi_invoices!: Sequelize.HasManyHasAssociationsMixin<api_invoice, api_invoiceId>;
  countApi_invoices!: Sequelize.HasManyCountAssociationsMixin;
  // api_service hasMany api_review via to_service_id
  api_reviews!: api_review[];
  getApi_reviews!: Sequelize.HasManyGetAssociationsMixin<api_review>;
  setApi_reviews!: Sequelize.HasManySetAssociationsMixin<api_review, api_reviewId>;
  addApi_review!: Sequelize.HasManyAddAssociationMixin<api_review, api_reviewId>;
  addApi_reviews!: Sequelize.HasManyAddAssociationsMixin<api_review, api_reviewId>;
  createApi_review!: Sequelize.HasManyCreateAssociationMixin<api_review>;
  removeApi_review!: Sequelize.HasManyRemoveAssociationMixin<api_review, api_reviewId>;
  removeApi_reviews!: Sequelize.HasManyRemoveAssociationsMixin<api_review, api_reviewId>;
  hasApi_review!: Sequelize.HasManyHasAssociationMixin<api_review, api_reviewId>;
  hasApi_reviews!: Sequelize.HasManyHasAssociationsMixin<api_review, api_reviewId>;
  countApi_reviews!: Sequelize.HasManyCountAssociationsMixin;
  // api_service hasMany api_schedule via service_id
  api_schedules!: api_schedule[];
  getApi_schedules!: Sequelize.HasManyGetAssociationsMixin<api_schedule>;
  setApi_schedules!: Sequelize.HasManySetAssociationsMixin<api_schedule, api_scheduleId>;
  addApi_schedule!: Sequelize.HasManyAddAssociationMixin<api_schedule, api_scheduleId>;
  addApi_schedules!: Sequelize.HasManyAddAssociationsMixin<api_schedule, api_scheduleId>;
  createApi_schedule!: Sequelize.HasManyCreateAssociationMixin<api_schedule>;
  removeApi_schedule!: Sequelize.HasManyRemoveAssociationMixin<api_schedule, api_scheduleId>;
  removeApi_schedules!: Sequelize.HasManyRemoveAssociationsMixin<api_schedule, api_scheduleId>;
  hasApi_schedule!: Sequelize.HasManyHasAssociationMixin<api_schedule, api_scheduleId>;
  hasApi_schedules!: Sequelize.HasManyHasAssociationsMixin<api_schedule, api_scheduleId>;
  countApi_schedules!: Sequelize.HasManyCountAssociationsMixin;
  // api_service hasMany api_service_followers via service_id
  api_service_followers!: api_service_followers[];
  getApi_service_followers!: Sequelize.HasManyGetAssociationsMixin<api_service_followers>;
  setApi_service_followers!: Sequelize.HasManySetAssociationsMixin<api_service_followers, api_service_followersId>;
  addApi_service_follower!: Sequelize.HasManyAddAssociationMixin<api_service_followers, api_service_followersId>;
  addApi_service_followers!: Sequelize.HasManyAddAssociationsMixin<api_service_followers, api_service_followersId>;
  createApi_service_follower!: Sequelize.HasManyCreateAssociationMixin<api_service_followers>;
  removeApi_service_follower!: Sequelize.HasManyRemoveAssociationMixin<api_service_followers, api_service_followersId>;
  removeApi_service_followers!: Sequelize.HasManyRemoveAssociationsMixin<api_service_followers, api_service_followersId>;
  hasApi_service_follower!: Sequelize.HasManyHasAssociationMixin<api_service_followers, api_service_followersId>;
  hasApi_service_followers!: Sequelize.HasManyHasAssociationsMixin<api_service_followers, api_service_followersId>;
  countApi_service_followers!: Sequelize.HasManyCountAssociationsMixin;
  // api_service hasMany api_servicereport via service_id
  api_servicereports!: api_servicereport[];
  getApi_servicereports!: Sequelize.HasManyGetAssociationsMixin<api_servicereport>;
  setApi_servicereports!: Sequelize.HasManySetAssociationsMixin<api_servicereport, api_servicereportId>;
  addApi_servicereport!: Sequelize.HasManyAddAssociationMixin<api_servicereport, api_servicereportId>;
  addApi_servicereports!: Sequelize.HasManyAddAssociationsMixin<api_servicereport, api_servicereportId>;
  createApi_servicereport!: Sequelize.HasManyCreateAssociationMixin<api_servicereport>;
  removeApi_servicereport!: Sequelize.HasManyRemoveAssociationMixin<api_servicereport, api_servicereportId>;
  removeApi_servicereports!: Sequelize.HasManyRemoveAssociationsMixin<api_servicereport, api_servicereportId>;
  hasApi_servicereport!: Sequelize.HasManyHasAssociationMixin<api_servicereport, api_servicereportId>;
  hasApi_servicereports!: Sequelize.HasManyHasAssociationsMixin<api_servicereport, api_servicereportId>;
  countApi_servicereports!: Sequelize.HasManyCountAssociationsMixin;
  // api_service hasMany api_servicevisit via service_id
  api_servicevisits!: api_servicevisit[];
  getApi_servicevisits!: Sequelize.HasManyGetAssociationsMixin<api_servicevisit>;
  setApi_servicevisits!: Sequelize.HasManySetAssociationsMixin<api_servicevisit, api_servicevisitId>;
  addApi_servicevisit!: Sequelize.HasManyAddAssociationMixin<api_servicevisit, api_servicevisitId>;
  addApi_servicevisits!: Sequelize.HasManyAddAssociationsMixin<api_servicevisit, api_servicevisitId>;
  createApi_servicevisit!: Sequelize.HasManyCreateAssociationMixin<api_servicevisit>;
  removeApi_servicevisit!: Sequelize.HasManyRemoveAssociationMixin<api_servicevisit, api_servicevisitId>;
  removeApi_servicevisits!: Sequelize.HasManyRemoveAssociationsMixin<api_servicevisit, api_servicevisitId>;
  hasApi_servicevisit!: Sequelize.HasManyHasAssociationMixin<api_servicevisit, api_servicevisitId>;
  hasApi_servicevisits!: Sequelize.HasManyHasAssociationsMixin<api_servicevisit, api_servicevisitId>;
  countApi_servicevisits!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_service {
    return api_service.init({
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
    name: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    telephone: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    cellphone: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    website: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    logo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cover: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lat: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    lng: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    expiration_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    number_of_reviews: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    average_rating: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_category',
        key: 'id'
      }
    },
    municipality_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_municipality',
        key: 'id'
      }
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_profile',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_service',
    schema: 'public',
      updatedAt: "updated",
      createdAt: "created",
    timestamps: false,
    indexes: [
      {
        name: "api_service_category_id_7dadc477",
        fields: [
          { name: "category_id" },
        ]
      },
      {
        name: "api_service_municipality_id_a72c4fdd",
        fields: [
          { name: "municipality_id" },
        ]
      },
      {
        name: "api_service_owner_id_ac19479b",
        fields: [
          { name: "owner_id" },
        ]
      },
      {
        name: "api_service_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
