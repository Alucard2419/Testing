import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_reportdetail, api_reportdetailId } from './api_reportdetail';
import type { api_servicereport, api_servicereportId } from './api_servicereport';

export interface api_servicereport_detailsAttributes {
  id: number;
  servicereport_id: number;
  reportdetail_id: number;
}

export type api_servicereport_detailsPk = "id";
export type api_servicereport_detailsId = api_servicereport_details[api_servicereport_detailsPk];
export type api_servicereport_detailsOptionalAttributes = "id";
export type api_servicereport_detailsCreationAttributes = Optional<api_servicereport_detailsAttributes, api_servicereport_detailsOptionalAttributes>;

export class api_servicereport_details extends Model<api_servicereport_detailsAttributes, api_servicereport_detailsCreationAttributes> implements api_servicereport_detailsAttributes {
  id!: number;
  servicereport_id!: number;
  reportdetail_id!: number;

  // api_servicereport_details belongsTo api_reportdetail via reportdetail_id
  reportdetail!: api_reportdetail;
  getReportdetail!: Sequelize.BelongsToGetAssociationMixin<api_reportdetail>;
  setReportdetail!: Sequelize.BelongsToSetAssociationMixin<api_reportdetail, api_reportdetailId>;
  createReportdetail!: Sequelize.BelongsToCreateAssociationMixin<api_reportdetail>;
  // api_servicereport_details belongsTo api_servicereport via servicereport_id
  servicereport!: api_servicereport;
  getServicereport!: Sequelize.BelongsToGetAssociationMixin<api_servicereport>;
  setServicereport!: Sequelize.BelongsToSetAssociationMixin<api_servicereport, api_servicereportId>;
  createServicereport!: Sequelize.BelongsToCreateAssociationMixin<api_servicereport>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_servicereport_details {
    return api_servicereport_details.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    servicereport_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_servicereport',
        key: 'id'
      },
      unique: "api_servicereport_detail_servicereport_id_reportd_4dc19fb2_uniq"
    },
    reportdetail_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_reportdetail',
        key: 'id'
      },
      unique: "api_servicereport_detail_servicereport_id_reportd_4dc19fb2_uniq"
    }
  }, {
    sequelize,
    tableName: 'api_servicereport_details',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_servicereport_detail_servicereport_id_reportd_4dc19fb2_uniq",
        unique: true,
        fields: [
          { name: "servicereport_id" },
          { name: "reportdetail_id" },
        ]
      },
      {
        name: "api_servicereport_details_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_servicereport_details_reportdetail_id_f71e528b",
        fields: [
          { name: "reportdetail_id" },
        ]
      },
      {
        name: "api_servicereport_details_servicereport_id_1ffb9718",
        fields: [
          { name: "servicereport_id" },
        ]
      },
    ]
  });
  }
}
