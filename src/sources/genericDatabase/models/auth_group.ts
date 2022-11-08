import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { auth_group_permissions, auth_group_permissionsId } from './auth_group_permissions';
import type { custom_user_user_groups, custom_user_user_groupsId } from './custom_user_user_groups';

export interface auth_groupAttributes {
  id: number;
  name: string;
}

export type auth_groupPk = "id";
export type auth_groupId = auth_group[auth_groupPk];
export type auth_groupOptionalAttributes = "id";
export type auth_groupCreationAttributes = Optional<auth_groupAttributes, auth_groupOptionalAttributes>;

export class auth_group extends Model<auth_groupAttributes, auth_groupCreationAttributes> implements auth_groupAttributes {
  id!: number;
  name!: string;

  // auth_group hasMany auth_group_permissions via group_id
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
  // auth_group hasMany custom_user_user_groups via group_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof auth_group {
    return auth_group.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: "auth_group_name_key"
    }
  }, {
    sequelize,
    tableName: 'auth_group',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "auth_group_name_a6ea08ec_like",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "auth_group_name_key",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "auth_group_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
