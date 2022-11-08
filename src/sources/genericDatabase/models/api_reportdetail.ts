import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_reviewreport_details, api_reviewreport_detailsId } from './api_reviewreport_details';
import type { api_servicereport_details, api_servicereport_detailsId } from './api_servicereport_details';
import type { api_userreport_details, api_userreport_detailsId } from './api_userreport_details';

export interface api_reportdetailAttributes {
  id: number;
  es_name: string;
  en_name: string;
  es_detail: string;
  en_detail: string;
}

export type api_reportdetailPk = "id";
export type api_reportdetailId = api_reportdetail[api_reportdetailPk];
export type api_reportdetailOptionalAttributes = "id";
export type api_reportdetailCreationAttributes = Optional<api_reportdetailAttributes, api_reportdetailOptionalAttributes>;

export class api_reportdetail extends Model<api_reportdetailAttributes, api_reportdetailCreationAttributes> implements api_reportdetailAttributes {
  id!: number;
  es_name!: string;
  en_name!: string;
  es_detail!: string;
  en_detail!: string;

  // api_reportdetail hasMany api_reviewreport_details via reportdetail_id
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
  // api_reportdetail hasMany api_servicereport_details via reportdetail_id
  api_servicereport_details!: api_servicereport_details[];
  getApi_servicereport_details!: Sequelize.HasManyGetAssociationsMixin<api_servicereport_details>;
  setApi_servicereport_details!: Sequelize.HasManySetAssociationsMixin<api_servicereport_details, api_servicereport_detailsId>;
  addApi_servicereport_detail!: Sequelize.HasManyAddAssociationMixin<api_servicereport_details, api_servicereport_detailsId>;
  addApi_servicereport_details!: Sequelize.HasManyAddAssociationsMixin<api_servicereport_details, api_servicereport_detailsId>;
  createApi_servicereport_detail!: Sequelize.HasManyCreateAssociationMixin<api_servicereport_details>;
  removeApi_servicereport_detail!: Sequelize.HasManyRemoveAssociationMixin<api_servicereport_details, api_servicereport_detailsId>;
  removeApi_servicereport_details!: Sequelize.HasManyRemoveAssociationsMixin<api_servicereport_details, api_servicereport_detailsId>;
  hasApi_servicereport_detail!: Sequelize.HasManyHasAssociationMixin<api_servicereport_details, api_servicereport_detailsId>;
  hasApi_servicereport_details!: Sequelize.HasManyHasAssociationsMixin<api_servicereport_details, api_servicereport_detailsId>;
  countApi_servicereport_details!: Sequelize.HasManyCountAssociationsMixin;
  // api_reportdetail hasMany api_userreport_details via reportdetail_id
  api_userreport_details!: api_userreport_details[];
  getApi_userreport_details!: Sequelize.HasManyGetAssociationsMixin<api_userreport_details>;
  setApi_userreport_details!: Sequelize.HasManySetAssociationsMixin<api_userreport_details, api_userreport_detailsId>;
  addApi_userreport_detail!: Sequelize.HasManyAddAssociationMixin<api_userreport_details, api_userreport_detailsId>;
  addApi_userreport_details!: Sequelize.HasManyAddAssociationsMixin<api_userreport_details, api_userreport_detailsId>;
  createApi_userreport_detail!: Sequelize.HasManyCreateAssociationMixin<api_userreport_details>;
  removeApi_userreport_detail!: Sequelize.HasManyRemoveAssociationMixin<api_userreport_details, api_userreport_detailsId>;
  removeApi_userreport_details!: Sequelize.HasManyRemoveAssociationsMixin<api_userreport_details, api_userreport_detailsId>;
  hasApi_userreport_detail!: Sequelize.HasManyHasAssociationMixin<api_userreport_details, api_userreport_detailsId>;
  hasApi_userreport_details!: Sequelize.HasManyHasAssociationsMixin<api_userreport_details, api_userreport_detailsId>;
  countApi_userreport_details!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_reportdetail {
    return api_reportdetail.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    es_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    en_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    es_detail: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    en_detail: {
      type: DataTypes.STRING(300),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'api_reportdetail',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_reportdetail_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
