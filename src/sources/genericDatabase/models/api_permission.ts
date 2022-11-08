import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_membership_permissions, api_membership_permissionsId } from './api_membership_permissions';

export interface api_permissionAttributes {
  id: number;
  created: Date;
  updated: Date;
  name: string;
}

export type api_permissionPk = "id";
export type api_permissionId = api_permission[api_permissionPk];
export type api_permissionOptionalAttributes = "id";
export type api_permissionCreationAttributes = Optional<api_permissionAttributes, api_permissionOptionalAttributes>;

export class api_permission extends Model<api_permissionAttributes, api_permissionCreationAttributes> implements api_permissionAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  name!: string;

  // api_permission hasMany api_membership_permissions via permission_id
  api_membership_permissions!: api_membership_permissions[];
  getApi_membership_permissions!: Sequelize.HasManyGetAssociationsMixin<api_membership_permissions>;
  setApi_membership_permissions!: Sequelize.HasManySetAssociationsMixin<api_membership_permissions, api_membership_permissionsId>;
  addApi_membership_permission!: Sequelize.HasManyAddAssociationMixin<api_membership_permissions, api_membership_permissionsId>;
  addApi_membership_permissions!: Sequelize.HasManyAddAssociationsMixin<api_membership_permissions, api_membership_permissionsId>;
  createApi_membership_permission!: Sequelize.HasManyCreateAssociationMixin<api_membership_permissions>;
  removeApi_membership_permission!: Sequelize.HasManyRemoveAssociationMixin<api_membership_permissions, api_membership_permissionsId>;
  removeApi_membership_permissions!: Sequelize.HasManyRemoveAssociationsMixin<api_membership_permissions, api_membership_permissionsId>;
  hasApi_membership_permission!: Sequelize.HasManyHasAssociationMixin<api_membership_permissions, api_membership_permissionsId>;
  hasApi_membership_permissions!: Sequelize.HasManyHasAssociationsMixin<api_membership_permissions, api_membership_permissionsId>;
  countApi_membership_permissions!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_permission {
    return api_permission.init({
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
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "api_permission_name_key"
    }
  }, {
    sequelize,
    tableName: 'api_permission',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_permission_name_3a7f1072_like",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "api_permission_name_key",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "api_permission_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
