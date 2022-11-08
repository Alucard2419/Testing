import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_reportdetail, api_reportdetailId } from './api_reportdetail';
import type { api_userreport, api_userreportId } from './api_userreport';

export interface api_userreport_detailsAttributes {
  id: number;
  userreport_id: number;
  reportdetail_id: number;
}

export type api_userreport_detailsPk = "id";
export type api_userreport_detailsId = api_userreport_details[api_userreport_detailsPk];
export type api_userreport_detailsOptionalAttributes = "id";
export type api_userreport_detailsCreationAttributes = Optional<api_userreport_detailsAttributes, api_userreport_detailsOptionalAttributes>;

export class api_userreport_details extends Model<api_userreport_detailsAttributes, api_userreport_detailsCreationAttributes> implements api_userreport_detailsAttributes {
  id!: number;
  userreport_id!: number;
  reportdetail_id!: number;

  // api_userreport_details belongsTo api_reportdetail via reportdetail_id
  reportdetail!: api_reportdetail;
  getReportdetail!: Sequelize.BelongsToGetAssociationMixin<api_reportdetail>;
  setReportdetail!: Sequelize.BelongsToSetAssociationMixin<api_reportdetail, api_reportdetailId>;
  createReportdetail!: Sequelize.BelongsToCreateAssociationMixin<api_reportdetail>;
  // api_userreport_details belongsTo api_userreport via userreport_id
  userreport!: api_userreport;
  getUserreport!: Sequelize.BelongsToGetAssociationMixin<api_userreport>;
  setUserreport!: Sequelize.BelongsToSetAssociationMixin<api_userreport, api_userreportId>;
  createUserreport!: Sequelize.BelongsToCreateAssociationMixin<api_userreport>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_userreport_details {
    return api_userreport_details.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userreport_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_userreport',
        key: 'id'
      },
      unique: "api_userreport_details_userreport_id_reportdeta_04a16c6b_uniq"
    },
    reportdetail_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_reportdetail',
        key: 'id'
      },
      unique: "api_userreport_details_userreport_id_reportdeta_04a16c6b_uniq"
    }
  }, {
    sequelize,
    tableName: 'api_userreport_details',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_userreport_details_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_userreport_details_reportdetail_id_e5ca17fa",
        fields: [
          { name: "reportdetail_id" },
        ]
      },
      {
        name: "api_userreport_details_userreport_id_dd404272",
        fields: [
          { name: "userreport_id" },
        ]
      },
      {
        name: "api_userreport_details_userreport_id_reportdeta_04a16c6b_uniq",
        unique: true,
        fields: [
          { name: "userreport_id" },
          { name: "reportdetail_id" },
        ]
      },
    ]
  });
  }
}
