import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { auth_permission, auth_permissionId } from './auth_permission';
import type { custom_user_user, custom_user_userId } from './custom_user_user';

export interface custom_user_user_user_permissionsAttributes {
  id: number;
  user_id: number;
  permission_id: number;
}

export type custom_user_user_user_permissionsPk = "id";
export type custom_user_user_user_permissionsId = custom_user_user_user_permissions[custom_user_user_user_permissionsPk];
export type custom_user_user_user_permissionsOptionalAttributes = "id";
export type custom_user_user_user_permissionsCreationAttributes = Optional<custom_user_user_user_permissionsAttributes, custom_user_user_user_permissionsOptionalAttributes>;

export class custom_user_user_user_permissions extends Model<custom_user_user_user_permissionsAttributes, custom_user_user_user_permissionsCreationAttributes> implements custom_user_user_user_permissionsAttributes {
  id!: number;
  user_id!: number;
  permission_id!: number;

  // custom_user_user_user_permissions belongsTo auth_permission via permission_id
  permission!: auth_permission;
  getPermission!: Sequelize.BelongsToGetAssociationMixin<auth_permission>;
  setPermission!: Sequelize.BelongsToSetAssociationMixin<auth_permission, auth_permissionId>;
  createPermission!: Sequelize.BelongsToCreateAssociationMixin<auth_permission>;
  // custom_user_user_user_permissions belongsTo custom_user_user via user_id
  user!: custom_user_user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<custom_user_user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<custom_user_user, custom_user_userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<custom_user_user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof custom_user_user_user_permissions {
    return custom_user_user_user_permissions.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'custom_user_user',
        key: 'id'
      },
      unique: "custom_user_user_user_pe_user_id_permission_id_2215a086_uniq"
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_permission',
        key: 'id'
      },
      unique: "custom_user_user_user_pe_user_id_permission_id_2215a086_uniq"
    }
  }, {
    sequelize,
    tableName: 'custom_user_user_user_permissions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "custom_user_user_user_pe_user_id_permission_id_2215a086_uniq",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "permission_id" },
        ]
      },
      {
        name: "custom_user_user_user_permissions_permission_id_cb2d2b0f",
        fields: [
          { name: "permission_id" },
        ]
      },
      {
        name: "custom_user_user_user_permissions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "custom_user_user_user_permissions_user_id_65556ab9",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
