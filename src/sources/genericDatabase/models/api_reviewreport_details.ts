import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_reportdetail, api_reportdetailId } from './api_reportdetail';
import type { api_reviewreport, api_reviewreportId } from './api_reviewreport';

export interface api_reviewreport_detailsAttributes {
  id: number;
  reviewreport_id: number;
  reportdetail_id: number;
}

export type api_reviewreport_detailsPk = "id";
export type api_reviewreport_detailsId = api_reviewreport_details[api_reviewreport_detailsPk];
export type api_reviewreport_detailsOptionalAttributes = "id";
export type api_reviewreport_detailsCreationAttributes = Optional<api_reviewreport_detailsAttributes, api_reviewreport_detailsOptionalAttributes>;

export class api_reviewreport_details extends Model<api_reviewreport_detailsAttributes, api_reviewreport_detailsCreationAttributes> implements api_reviewreport_detailsAttributes {
  id!: number;
  reviewreport_id!: number;
  reportdetail_id!: number;

  // api_reviewreport_details belongsTo api_reportdetail via reportdetail_id
  reportdetail!: api_reportdetail;
  getReportdetail!: Sequelize.BelongsToGetAssociationMixin<api_reportdetail>;
  setReportdetail!: Sequelize.BelongsToSetAssociationMixin<api_reportdetail, api_reportdetailId>;
  createReportdetail!: Sequelize.BelongsToCreateAssociationMixin<api_reportdetail>;
  // api_reviewreport_details belongsTo api_reviewreport via reviewreport_id
  reviewreport!: api_reviewreport;
  getReviewreport!: Sequelize.BelongsToGetAssociationMixin<api_reviewreport>;
  setReviewreport!: Sequelize.BelongsToSetAssociationMixin<api_reviewreport, api_reviewreportId>;
  createReviewreport!: Sequelize.BelongsToCreateAssociationMixin<api_reviewreport>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_reviewreport_details {
    return api_reviewreport_details.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reviewreport_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_reviewreport',
        key: 'id'
      },
      unique: "api_reviewreport_details_reviewreport_id_reportde_65ca8030_uniq"
    },
    reportdetail_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_reportdetail',
        key: 'id'
      },
      unique: "api_reviewreport_details_reviewreport_id_reportde_65ca8030_uniq"
    }
  }, {
    sequelize,
    tableName: 'api_reviewreport_details',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_reviewreport_details_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_reviewreport_details_reportdetail_id_ffd6fef3",
        fields: [
          { name: "reportdetail_id" },
        ]
      },
      {
        name: "api_reviewreport_details_reviewreport_id_aff12964",
        fields: [
          { name: "reviewreport_id" },
        ]
      },
      {
        name: "api_reviewreport_details_reviewreport_id_reportde_65ca8030_uniq",
        unique: true,
        fields: [
          { name: "reviewreport_id" },
          { name: "reportdetail_id" },
        ]
      },
    ]
  });
  }
}
