import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_membership, api_membershipId } from './api_membership';
import type { api_permission, api_permissionId } from './api_permission';

export interface api_membership_permissionsAttributes {
  id: number;
  membership_id: number;
  permission_id: number;
}

export type api_membership_permissionsPk = "id";
export type api_membership_permissionsId = api_membership_permissions[api_membership_permissionsPk];
export type api_membership_permissionsOptionalAttributes = "id";
export type api_membership_permissionsCreationAttributes = Optional<api_membership_permissionsAttributes, api_membership_permissionsOptionalAttributes>;

export class api_membership_permissions extends Model<api_membership_permissionsAttributes, api_membership_permissionsCreationAttributes> implements api_membership_permissionsAttributes {
  id!: number;
  membership_id!: number;
  permission_id!: number;

  // api_membership_permissions belongsTo api_membership via membership_id
  membership!: api_membership;
  getMembership!: Sequelize.BelongsToGetAssociationMixin<api_membership>;
  setMembership!: Sequelize.BelongsToSetAssociationMixin<api_membership, api_membershipId>;
  createMembership!: Sequelize.BelongsToCreateAssociationMixin<api_membership>;
  // api_membership_permissions belongsTo api_permission via permission_id
  permission!: api_permission;
  getPermission!: Sequelize.BelongsToGetAssociationMixin<api_permission>;
  setPermission!: Sequelize.BelongsToSetAssociationMixin<api_permission, api_permissionId>;
  createPermission!: Sequelize.BelongsToCreateAssociationMixin<api_permission>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_membership_permissions {
    return api_membership_permissions.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    membership_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_membership',
        key: 'id'
      },
      unique: "api_membership_permissio_membership_id_permission_b5e2bac3_uniq"
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_permission',
        key: 'id'
      },
      unique: "api_membership_permissio_membership_id_permission_b5e2bac3_uniq"
    }
  }, {
    sequelize,
    tableName: 'api_membership_permissions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_membership_permissio_membership_id_permission_b5e2bac3_uniq",
        unique: true,
        fields: [
          { name: "membership_id" },
          { name: "permission_id" },
        ]
      },
      {
        name: "api_membership_permissions_membership_id_94b6fbda",
        fields: [
          { name: "membership_id" },
        ]
      },
      {
        name: "api_membership_permissions_permission_id_7421badb",
        fields: [
          { name: "permission_id" },
        ]
      },
      {
        name: "api_membership_permissions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
