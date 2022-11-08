import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_schedule, api_scheduleId } from './api_schedule';

export interface api_timewindowAttributes {
  id: number;
  from_hour: string;
  to_hour: string;
  schedule_id: number;
}

export type api_timewindowPk = "id";
export type api_timewindowId = api_timewindow[api_timewindowPk];
export type api_timewindowOptionalAttributes = "id";
export type api_timewindowCreationAttributes = Optional<api_timewindowAttributes, api_timewindowOptionalAttributes>;

export class api_timewindow extends Model<api_timewindowAttributes, api_timewindowCreationAttributes> implements api_timewindowAttributes {
  id!: number;
  from_hour!: string;
  to_hour!: string;
  schedule_id!: number;

  // api_timewindow belongsTo api_schedule via schedule_id
  schedule!: api_schedule;
  getSchedule!: Sequelize.BelongsToGetAssociationMixin<api_schedule>;
  setSchedule!: Sequelize.BelongsToSetAssociationMixin<api_schedule, api_scheduleId>;
  createSchedule!: Sequelize.BelongsToCreateAssociationMixin<api_schedule>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_timewindow {
    return api_timewindow.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    from_hour: {
      type: DataTypes.TIME,
      allowNull: false
    },
    to_hour: {
      type: DataTypes.TIME,
      allowNull: false
    },
    schedule_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_schedule',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_timewindow',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_timewindow_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_timewindow_schedule_id_4b13962d",
        fields: [
          { name: "schedule_id" },
        ]
      },
    ]
  });
  }
}
