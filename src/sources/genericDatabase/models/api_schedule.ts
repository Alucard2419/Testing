import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_service, api_serviceId } from './api_service';
import type { api_timewindow, api_timewindowId } from './api_timewindow';

export interface api_scheduleAttributes {
  id: number;
  sunday: boolean;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  kind: number;
  service_id: number;
}

export type api_schedulePk = "id";
export type api_scheduleId = api_schedule[api_schedulePk];
export type api_scheduleOptionalAttributes = "id";
export type api_scheduleCreationAttributes = Optional<api_scheduleAttributes, api_scheduleOptionalAttributes>;

export class api_schedule extends Model<api_scheduleAttributes, api_scheduleCreationAttributes> implements api_scheduleAttributes {
  id!: number;
  sunday!: boolean;
  monday!: boolean;
  tuesday!: boolean;
  wednesday!: boolean;
  thursday!: boolean;
  friday!: boolean;
  saturday!: boolean;
  kind!: number;
  service_id!: number;

  // api_schedule hasMany api_timewindow via schedule_id
  api_timewindows!: api_timewindow[];
  getApi_timewindows!: Sequelize.HasManyGetAssociationsMixin<api_timewindow>;
  setApi_timewindows!: Sequelize.HasManySetAssociationsMixin<api_timewindow, api_timewindowId>;
  addApi_timewindow!: Sequelize.HasManyAddAssociationMixin<api_timewindow, api_timewindowId>;
  addApi_timewindows!: Sequelize.HasManyAddAssociationsMixin<api_timewindow, api_timewindowId>;
  createApi_timewindow!: Sequelize.HasManyCreateAssociationMixin<api_timewindow>;
  removeApi_timewindow!: Sequelize.HasManyRemoveAssociationMixin<api_timewindow, api_timewindowId>;
  removeApi_timewindows!: Sequelize.HasManyRemoveAssociationsMixin<api_timewindow, api_timewindowId>;
  hasApi_timewindow!: Sequelize.HasManyHasAssociationMixin<api_timewindow, api_timewindowId>;
  hasApi_timewindows!: Sequelize.HasManyHasAssociationsMixin<api_timewindow, api_timewindowId>;
  countApi_timewindows!: Sequelize.HasManyCountAssociationsMixin;
  // api_schedule belongsTo api_service via service_id
  service!: api_service;
  getService!: Sequelize.BelongsToGetAssociationMixin<api_service>;
  setService!: Sequelize.BelongsToSetAssociationMixin<api_service, api_serviceId>;
  createService!: Sequelize.BelongsToCreateAssociationMixin<api_service>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_schedule {
    return api_schedule.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sunday: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    monday: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    tuesday: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    wednesday: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    thursday: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    friday: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    saturday: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    kind: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    tableName: 'api_schedule',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_schedule_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_schedule_service_id_14a11b1a",
        fields: [
          { name: "service_id" },
        ]
      },
    ]
  });
  }
}
