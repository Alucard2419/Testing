import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { custom_user_user, custom_user_userId } from './custom_user_user';

export interface fcm_django_fcmdeviceAttributes {
  id: number;
  name?: string;
  active: boolean;
  date_created?: Date;
  device_id?: string;
  registration_id: string;
  type: string;
  user_id?: number;
}

export type fcm_django_fcmdevicePk = "id";
export type fcm_django_fcmdeviceId = fcm_django_fcmdevice[fcm_django_fcmdevicePk];
export type fcm_django_fcmdeviceOptionalAttributes = "id" | "name" | "date_created" | "device_id" | "user_id";
export type fcm_django_fcmdeviceCreationAttributes = Optional<fcm_django_fcmdeviceAttributes, fcm_django_fcmdeviceOptionalAttributes>;

export class fcm_django_fcmdevice extends Model<fcm_django_fcmdeviceAttributes, fcm_django_fcmdeviceCreationAttributes> implements fcm_django_fcmdeviceAttributes {
  id!: number;
  name?: string;
  active!: boolean;
  date_created?: Date;
  device_id?: string;
  registration_id!: string;
  type!: string;
  user_id?: number;

  // fcm_django_fcmdevice belongsTo custom_user_user via user_id
  user!: custom_user_user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<custom_user_user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<custom_user_user, custom_user_userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<custom_user_user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof fcm_django_fcmdevice {
    return fcm_django_fcmdevice.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    device_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    registration_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'custom_user_user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'fcm_django_fcmdevice',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "fcm_django_fcmdevice_device_id_a9406c36",
        fields: [
          { name: "device_id" },
        ]
      },
      {
        name: "fcm_django_fcmdevice_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fcm_django_fcmdevice_user_id_6cdfc0a2",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
