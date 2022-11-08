import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_profile, api_profileId } from './api_profile';
import type { api_service, api_serviceId } from './api_service';
import type { api_servicereport_details, api_servicereport_detailsId } from './api_servicereport_details';

export interface api_servicereportAttributes {
  id: number;
  created: Date;
  updated: Date;
  from_user_id: number;
  service_id: number;
}

export type api_servicereportPk = "id";
export type api_servicereportId = api_servicereport[api_servicereportPk];
export type api_servicereportOptionalAttributes = "id";
export type api_servicereportCreationAttributes = Optional<api_servicereportAttributes, api_servicereportOptionalAttributes>;

export class api_servicereport extends Model<api_servicereportAttributes, api_servicereportCreationAttributes> implements api_servicereportAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  from_user_id!: number;
  service_id!: number;

  // api_servicereport belongsTo api_profile via from_user_id
  from_user!: api_profile;
  getFrom_user!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setFrom_user!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createFrom_user!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;
  // api_servicereport belongsTo api_service via service_id
  service!: api_service;
  getService!: Sequelize.BelongsToGetAssociationMixin<api_service>;
  setService!: Sequelize.BelongsToSetAssociationMixin<api_service, api_serviceId>;
  createService!: Sequelize.BelongsToCreateAssociationMixin<api_service>;
  // api_servicereport hasMany api_servicereport_details via servicereport_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof api_servicereport {
    return api_servicereport.init({
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
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_service',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_servicereport',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_servicereport_from_user_id_1dbba1bf",
        fields: [
          { name: "from_user_id" },
        ]
      },
      {
        name: "api_servicereport_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_servicereport_service_id_e5afbd5c",
        fields: [
          { name: "service_id" },
        ]
      },
    ]
  });
  }
}
