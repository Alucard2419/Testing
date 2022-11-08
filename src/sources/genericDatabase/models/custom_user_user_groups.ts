import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { auth_group, auth_groupId } from './auth_group';
import type { custom_user_user, custom_user_userId } from './custom_user_user';

export interface custom_user_user_groupsAttributes {
  id: number;
  user_id: number;
  group_id: number;
}

export type custom_user_user_groupsPk = "id";
export type custom_user_user_groupsId = custom_user_user_groups[custom_user_user_groupsPk];
export type custom_user_user_groupsOptionalAttributes = "id";
export type custom_user_user_groupsCreationAttributes = Optional<custom_user_user_groupsAttributes, custom_user_user_groupsOptionalAttributes>;

export class custom_user_user_groups extends Model<custom_user_user_groupsAttributes, custom_user_user_groupsCreationAttributes> implements custom_user_user_groupsAttributes {
  id!: number;
  user_id!: number;
  group_id!: number;

  // custom_user_user_groups belongsTo auth_group via group_id
  group!: auth_group;
  getGroup!: Sequelize.BelongsToGetAssociationMixin<auth_group>;
  setGroup!: Sequelize.BelongsToSetAssociationMixin<auth_group, auth_groupId>;
  createGroup!: Sequelize.BelongsToCreateAssociationMixin<auth_group>;
  // custom_user_user_groups belongsTo custom_user_user via user_id
  user!: custom_user_user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<custom_user_user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<custom_user_user, custom_user_userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<custom_user_user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof custom_user_user_groups {
    return custom_user_user_groups.init({
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
      unique: "custom_user_user_groups_user_id_group_id_fc2104d2_uniq"
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_group',
        key: 'id'
      },
      unique: "custom_user_user_groups_user_id_group_id_fc2104d2_uniq"
    }
  }, {
    sequelize,
    tableName: 'custom_user_user_groups',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "custom_user_user_groups_group_id_dfde52bf",
        fields: [
          { name: "group_id" },
        ]
      },
      {
        name: "custom_user_user_groups_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "custom_user_user_groups_user_id_f1071bc9",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "custom_user_user_groups_user_id_group_id_fc2104d2_uniq",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "group_id" },
        ]
      },
    ]
  });
  }
}
