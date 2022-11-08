import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_profile, api_profileId } from './api_profile';

export interface api_notificationAttributes {
  id: number;
  type: string;
  image: string;
  data?: object;
  created_date: Date;
  seen: boolean;
  profile_id: number;
  expiration_date?: Date;
  expired: boolean;
}

export type api_notificationPk = "id";
export type api_notificationId = api_notification[api_notificationPk];
export type api_notificationOptionalAttributes = "id" | "data" | "expiration_date";
export type api_notificationCreationAttributes = Optional<api_notificationAttributes, api_notificationOptionalAttributes>;

export class api_notification extends Model<api_notificationAttributes, api_notificationCreationAttributes> implements api_notificationAttributes {
  id!: number;
  type!: string;
  image!: string;
  data?: object;
  created_date!: Date;
  seen!: boolean;
  profile_id!: number;
  expiration_date?: Date;
  expired!: boolean;

  // api_notification belongsTo api_profile via profile_id
  profile!: api_profile;
  getProfile!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setProfile!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createProfile!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_notification {
    return api_notification.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    data: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    seen: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_profile',
        key: 'id'
      }
    },
    expiration_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    expired: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'api_notification',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_notification_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_notification_profile_id_288ff30d",
        fields: [
          { name: "profile_id" },
        ]
      },
    ]
  });
  }
}
