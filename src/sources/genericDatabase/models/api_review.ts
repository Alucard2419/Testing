import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_profile, api_profileId } from './api_profile';
import type { api_reviewanswer, api_reviewanswerCreationAttributes, api_reviewanswerId } from './api_reviewanswer';
import type { api_reviewreport, api_reviewreportId } from './api_reviewreport';
import type { api_service, api_serviceId } from './api_service';

export interface api_reviewAttributes {
  id: number;
  created: Date;
  updated: Date;
  approved: boolean;
  rating: number;
  text: string;
  author_id: number;
  to_service_id: number;
}

export type api_reviewPk = "id";
export type api_reviewId = api_review[api_reviewPk];
export type api_reviewOptionalAttributes = "id";
export type api_reviewCreationAttributes = Optional<api_reviewAttributes, api_reviewOptionalAttributes>;

export class api_review extends Model<api_reviewAttributes, api_reviewCreationAttributes> implements api_reviewAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  approved!: boolean;
  rating!: number;
  text!: string;
  author_id!: number;
  to_service_id!: number;

  // api_review belongsTo api_profile via author_id
  author!: api_profile;
  getAuthor!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setAuthor!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createAuthor!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;
  // api_review hasOne api_reviewanswer via review_id
  api_reviewanswer!: api_reviewanswer;
  getApi_reviewanswer!: Sequelize.HasOneGetAssociationMixin<api_reviewanswer>;
  setApi_reviewanswer!: Sequelize.HasOneSetAssociationMixin<api_reviewanswer, api_reviewanswerId>;
  createApi_reviewanswer!: Sequelize.HasOneCreateAssociationMixin<api_reviewanswer>;
  // api_review hasMany api_reviewreport via review_id
  api_reviewreports!: api_reviewreport[];
  getApi_reviewreports!: Sequelize.HasManyGetAssociationsMixin<api_reviewreport>;
  setApi_reviewreports!: Sequelize.HasManySetAssociationsMixin<api_reviewreport, api_reviewreportId>;
  addApi_reviewreport!: Sequelize.HasManyAddAssociationMixin<api_reviewreport, api_reviewreportId>;
  addApi_reviewreports!: Sequelize.HasManyAddAssociationsMixin<api_reviewreport, api_reviewreportId>;
  createApi_reviewreport!: Sequelize.HasManyCreateAssociationMixin<api_reviewreport>;
  removeApi_reviewreport!: Sequelize.HasManyRemoveAssociationMixin<api_reviewreport, api_reviewreportId>;
  removeApi_reviewreports!: Sequelize.HasManyRemoveAssociationsMixin<api_reviewreport, api_reviewreportId>;
  hasApi_reviewreport!: Sequelize.HasManyHasAssociationMixin<api_reviewreport, api_reviewreportId>;
  hasApi_reviewreports!: Sequelize.HasManyHasAssociationsMixin<api_reviewreport, api_reviewreportId>;
  countApi_reviewreports!: Sequelize.HasManyCountAssociationsMixin;
  // api_review belongsTo api_service via to_service_id
  to_service!: api_service;
  getTo_service!: Sequelize.BelongsToGetAssociationMixin<api_service>;
  setTo_service!: Sequelize.BelongsToSetAssociationMixin<api_service, api_serviceId>;
  createTo_service!: Sequelize.BelongsToCreateAssociationMixin<api_service>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_review {
    return api_review.init({
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
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_profile',
        key: 'id'
      },
      unique: "user_can_only_make_one_review_in_each_service"
    },
    to_service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_service',
        key: 'id'
      },
      unique: "user_can_only_make_one_review_in_each_service"
    }
  }, {
    sequelize,
    tableName: 'api_review',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_review_author_id_e2f67c05",
        fields: [
          { name: "author_id" },
        ]
      },
      {
        name: "api_review_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_review_to_service_id_329aef65",
        fields: [
          { name: "to_service_id" },
        ]
      },
      {
        name: "user_can_only_make_one_review_in_each_service",
        unique: true,
        fields: [
          { name: "author_id" },
          { name: "to_service_id" },
        ]
      },
    ]
  });
  }
}
