import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_profile, api_profileId } from './api_profile';
import type { api_review, api_reviewId } from './api_review';
import type { api_reviewreport_details, api_reviewreport_detailsId } from './api_reviewreport_details';

export interface api_reviewreportAttributes {
  id: number;
  created: Date;
  updated: Date;
  from_user_id: number;
  review_id: number;
}

export type api_reviewreportPk = "id";
export type api_reviewreportId = api_reviewreport[api_reviewreportPk];
export type api_reviewreportOptionalAttributes = "id";
export type api_reviewreportCreationAttributes = Optional<api_reviewreportAttributes, api_reviewreportOptionalAttributes>;

export class api_reviewreport extends Model<api_reviewreportAttributes, api_reviewreportCreationAttributes> implements api_reviewreportAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  from_user_id!: number;
  review_id!: number;

  // api_reviewreport belongsTo api_profile via from_user_id
  from_user!: api_profile;
  getFrom_user!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setFrom_user!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createFrom_user!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;
  // api_reviewreport belongsTo api_review via review_id
  review!: api_review;
  getReview!: Sequelize.BelongsToGetAssociationMixin<api_review>;
  setReview!: Sequelize.BelongsToSetAssociationMixin<api_review, api_reviewId>;
  createReview!: Sequelize.BelongsToCreateAssociationMixin<api_review>;
  // api_reviewreport hasMany api_reviewreport_details via reviewreport_id
  api_reviewreport_details!: api_reviewreport_details[];
  getApi_reviewreport_details!: Sequelize.HasManyGetAssociationsMixin<api_reviewreport_details>;
  setApi_reviewreport_details!: Sequelize.HasManySetAssociationsMixin<api_reviewreport_details, api_reviewreport_detailsId>;
  addApi_reviewreport_detail!: Sequelize.HasManyAddAssociationMixin<api_reviewreport_details, api_reviewreport_detailsId>;
  addApi_reviewreport_details!: Sequelize.HasManyAddAssociationsMixin<api_reviewreport_details, api_reviewreport_detailsId>;
  createApi_reviewreport_detail!: Sequelize.HasManyCreateAssociationMixin<api_reviewreport_details>;
  removeApi_reviewreport_detail!: Sequelize.HasManyRemoveAssociationMixin<api_reviewreport_details, api_reviewreport_detailsId>;
  removeApi_reviewreport_details!: Sequelize.HasManyRemoveAssociationsMixin<api_reviewreport_details, api_reviewreport_detailsId>;
  hasApi_reviewreport_detail!: Sequelize.HasManyHasAssociationMixin<api_reviewreport_details, api_reviewreport_detailsId>;
  hasApi_reviewreport_details!: Sequelize.HasManyHasAssociationsMixin<api_reviewreport_details, api_reviewreport_detailsId>;
  countApi_reviewreport_details!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_reviewreport {
    return api_reviewreport.init({
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
    from_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_profile',
        key: 'id'
      }
    },
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_review',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_reviewreport',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_reviewreport_from_user_id_900b59b1",
        fields: [
          { name: "from_user_id" },
        ]
      },
      {
        name: "api_reviewreport_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_reviewreport_review_id_4a88a61b",
        fields: [
          { name: "review_id" },
        ]
      },
    ]
  });
  }
}
