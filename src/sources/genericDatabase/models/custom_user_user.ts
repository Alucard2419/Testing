import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_profile, api_profileCreationAttributes, api_profileId } from './api_profile';
import type { custom_user_user_groups, custom_user_user_groupsId } from './custom_user_user_groups';
import type { custom_user_user_user_permissions, custom_user_user_user_permissionsId } from './custom_user_user_user_permissions';
import type { django_admin_log, django_admin_logId } from './django_admin_log';
import type { fcm_django_fcmdevice, fcm_django_fcmdeviceId } from './fcm_django_fcmdevice';

export interface custom_user_userAttributes {
  id: number;
  password: string;
  last_login?: Date;
  is_superuser: boolean;
  is_staff: boolean;
  is_active: boolean;
  date_joined: Date;
  email: string;
  email_confirmed: boolean;
  phone: string;
}

export type custom_user_userPk = "id";
export type custom_user_userId = custom_user_user[custom_user_userPk];
export type custom_user_userOptionalAttributes = "id" | "last_login";
export type custom_user_userCreationAttributes = Optional<custom_user_userAttributes, custom_user_userOptionalAttributes>;

export class custom_user_user extends Model<custom_user_userAttributes, custom_user_userCreationAttributes> implements custom_user_userAttributes {
  id!: number;
  password!: string;
  last_login?: Date;
  is_superuser!: boolean;
  is_staff!: boolean;
  is_active!: boolean;
  date_joined!: Date;
  email!: string;
  email_confirmed!: boolean;
  phone!: string;

  // custom_user_user hasOne api_profile via user_id
  api_profile!: api_profile;
  getApi_profile!: Sequelize.HasOneGetAssociationMixin<api_profile>;
  setApi_profile!: Sequelize.HasOneSetAssociationMixin<api_profile, api_profileId>;
  createApi_profile!: Sequelize.HasOneCreateAssociationMixin<api_profile>;
  // custom_user_user hasMany custom_user_user_groups via user_id
  custom_user_user_groups!: custom_user_user_groups[];
  getCustom_user_user_groups!: Sequelize.HasManyGetAssociationsMixin<custom_user_user_groups>;
  setCustom_user_user_groups!: Sequelize.HasManySetAssociationsMixin<custom_user_user_groups, custom_user_user_groupsId>;
  addCustom_user_user_group!: Sequelize.HasManyAddAssociationMixin<custom_user_user_groups, custom_user_user_groupsId>;
  addCustom_user_user_groups!: Sequelize.HasManyAddAssociationsMixin<custom_user_user_groups, custom_user_user_groupsId>;
  createCustom_user_user_group!: Sequelize.HasManyCreateAssociationMixin<custom_user_user_groups>;
  removeCustom_user_user_group!: Sequelize.HasManyRemoveAssociationMixin<custom_user_user_groups, custom_user_user_groupsId>;
  removeCustom_user_user_groups!: Sequelize.HasManyRemoveAssociationsMixin<custom_user_user_groups, custom_user_user_groupsId>;
  hasCustom_user_user_group!: Sequelize.HasManyHasAssociationMixin<custom_user_user_groups, custom_user_user_groupsId>;
  hasCustom_user_user_groups!: Sequelize.HasManyHasAssociationsMixin<custom_user_user_groups, custom_user_user_groupsId>;
  countCustom_user_user_groups!: Sequelize.HasManyCountAssociationsMixin;
  // custom_user_user hasMany custom_user_user_user_permissions via user_id
  custom_user_user_user_permissions!: custom_user_user_user_permissions[];
  getCustom_user_user_user_permissions!: Sequelize.HasManyGetAssociationsMixin<custom_user_user_user_permissions>;
  setCustom_user_user_user_permissions!: Sequelize.HasManySetAssociationsMixin<custom_user_user_user_permissions, custom_user_user_user_permissionsId>;
  addCustom_user_user_user_permission!: Sequelize.HasManyAddAssociationMixin<custom_user_user_user_permissions, custom_user_user_user_permissionsId>;
  addCustom_user_user_user_permissions!: Sequelize.HasManyAddAssociationsMixin<custom_user_user_user_permissions, custom_user_user_user_permissionsId>;
  createCustom_user_user_user_permission!: Sequelize.HasManyCreateAssociationMixin<custom_user_user_user_permissions>;
  removeCustom_user_user_user_permission!: Sequelize.HasManyRemoveAssociationMixin<custom_user_user_user_permissions, custom_user_user_user_permissionsId>;
  removeCustom_user_user_user_permissions!: Sequelize.HasManyRemoveAssociationsMixin<custom_user_user_user_permissions, custom_user_user_user_permissionsId>;
  hasCustom_user_user_user_permission!: Sequelize.HasManyHasAssociationMixin<custom_user_user_user_permissions, custom_user_user_user_permissionsId>;
  hasCustom_user_user_user_permissions!: Sequelize.HasManyHasAssociationsMixin<custom_user_user_user_permissions, custom_user_user_user_permissionsId>;
  countCustom_user_user_user_permissions!: Sequelize.HasManyCountAssociationsMixin;
  // custom_user_user hasMany django_admin_log via user_id
  django_admin_logs!: django_admin_log[];
  getDjango_admin_logs!: Sequelize.HasManyGetAssociationsMixin<django_admin_log>;
  setDjango_admin_logs!: Sequelize.HasManySetAssociationsMixin<django_admin_log, django_admin_logId>;
  addDjango_admin_log!: Sequelize.HasManyAddAssociationMixin<django_admin_log, django_admin_logId>;
  addDjango_admin_logs!: Sequelize.HasManyAddAssociationsMixin<django_admin_log, django_admin_logId>;
  createDjango_admin_log!: Sequelize.HasManyCreateAssociationMixin<django_admin_log>;
  removeDjango_admin_log!: Sequelize.HasManyRemoveAssociationMixin<django_admin_log, django_admin_logId>;
  removeDjango_admin_logs!: Sequelize.HasManyRemoveAssociationsMixin<django_admin_log, django_admin_logId>;
  hasDjango_admin_log!: Sequelize.HasManyHasAssociationMixin<django_admin_log, django_admin_logId>;
  hasDjango_admin_logs!: Sequelize.HasManyHasAssociationsMixin<django_admin_log, django_admin_logId>;
  countDjango_admin_logs!: Sequelize.HasManyCountAssociationsMixin;
  // custom_user_user hasMany fcm_django_fcmdevice via user_id
  fcm_django_fcmdevices!: fcm_django_fcmdevice[];
  getFcm_django_fcmdevices!: Sequelize.HasManyGetAssociationsMixin<fcm_django_fcmdevice>;
  setFcm_django_fcmdevices!: Sequelize.HasManySetAssociationsMixin<fcm_django_fcmdevice, fcm_django_fcmdeviceId>;
  addFcm_django_fcmdevice!: Sequelize.HasManyAddAssociationMixin<fcm_django_fcmdevice, fcm_django_fcmdeviceId>;
  addFcm_django_fcmdevices!: Sequelize.HasManyAddAssociationsMixin<fcm_django_fcmdevice, fcm_django_fcmdeviceId>;
  createFcm_django_fcmdevice!: Sequelize.HasManyCreateAssociationMixin<fcm_django_fcmdevice>;
  removeFcm_django_fcmdevice!: Sequelize.HasManyRemoveAssociationMixin<fcm_django_fcmdevice, fcm_django_fcmdeviceId>;
  removeFcm_django_fcmdevices!: Sequelize.HasManyRemoveAssociationsMixin<fcm_django_fcmdevice, fcm_django_fcmdeviceId>;
  hasFcm_django_fcmdevice!: Sequelize.HasManyHasAssociationMixin<fcm_django_fcmdevice, fcm_django_fcmdeviceId>;
  hasFcm_django_fcmdevices!: Sequelize.HasManyHasAssociationsMixin<fcm_django_fcmdevice, fcm_django_fcmdeviceId>;
  countFcm_django_fcmdevices!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof custom_user_user {
    return custom_user_user.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_superuser: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_staff: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    date_joined: {
      type: DataTypes.DATE,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(254),
      allowNull: false,
      unique: "custom_user_user_email_key"
    },
    email_confirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'custom_user_user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "custom_user_user_email_a19d9305_like",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "custom_user_user_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "custom_user_user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
