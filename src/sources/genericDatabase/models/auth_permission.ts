import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { auth_group_permissions, auth_group_permissionsId } from './auth_group_permissions';
import type { custom_user_user_user_permissions, custom_user_user_user_permissionsId } from './custom_user_user_user_permissions';
import type { django_content_type, django_content_typeId } from './django_content_type';

export interface auth_permissionAttributes {
  id: number;
  name: string;
  content_type_id: number;
  codename: string;
}

export type auth_permissionPk = "id";
export type auth_permissionId = auth_permission[auth_permissionPk];
export type auth_permissionOptionalAttributes = "id";
export type auth_permissionCreationAttributes = Optional<auth_permissionAttributes, auth_permissionOptionalAttributes>;

export class auth_permission extends Model<auth_permissionAttributes, auth_permissionCreationAttributes> implements auth_permissionAttributes {
  id!: number;
  name!: string;
  content_type_id!: number;
  codename!: string;

  // auth_permission hasMany auth_group_permissions via permission_id
  auth_group_permissions!: auth_group_permissions[];
  getAuth_group_permissions!: Sequelize.HasManyGetAssociationsMixin<auth_group_permissions>;
  setAuth_group_permissions!: Sequelize.HasManySetAssociationsMixin<auth_group_permissions, auth_group_permissionsId>;
  addAuth_group_permission!: Sequelize.HasManyAddAssociationMixin<auth_group_permissions, auth_group_permissionsId>;
  addAuth_group_permissions!: Sequelize.HasManyAddAssociationsMixin<auth_group_permissions, auth_group_permissionsId>;
  createAuth_group_permission!: Sequelize.HasManyCreateAssociationMixin<auth_group_permissions>;
  removeAuth_group_permission!: Sequelize.HasManyRemoveAssociationMixin<auth_group_permissions, auth_group_permissionsId>;
  removeAuth_group_permissions!: Sequelize.HasManyRemoveAssociationsMixin<auth_group_permissions, auth_group_permissionsId>;
  hasAuth_group_permission!: Sequelize.HasManyHasAssociationMixin<auth_group_permissions, auth_group_permissionsId>;
  hasAuth_group_permissions!: Sequelize.HasManyHasAssociationsMixin<auth_group_permissions, auth_group_permissionsId>;
  countAuth_group_permissions!: Sequelize.HasManyCountAssociationsMixin;
  // auth_permission hasMany custom_user_user_user_permissions via permission_id
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
  // auth_permission belongsTo django_content_type via content_type_id
  content_type!: django_content_type;
  getContent_type!: Sequelize.BelongsToGetAssociationMixin<django_content_type>;
  setContent_type!: Sequelize.BelongsToSetAssociationMixin<django_content_type, django_content_typeId>;
  createContent_type!: Sequelize.BelongsToCreateAssociationMixin<django_content_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof auth_permission {
    return auth_permission.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    content_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'django_content_type',
        key: 'id'
      },
      unique: "auth_permission_content_type_id_codename_01ab375a_uniq"
    },
    codename: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "auth_permission_content_type_id_codename_01ab375a_uniq"
    }
  }, {
    sequelize,
    tableName: 'auth_permission',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "auth_permission_content_type_id_2f476e4b",
        fields: [
          { name: "content_type_id" },
        ]
      },
      {
        name: "auth_permission_content_type_id_codename_01ab375a_uniq",
        unique: true,
        fields: [
          { name: "content_type_id" },
          { name: "codename" },
        ]
      },
      {
        name: "auth_permission_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
