import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_chatroom, api_chatroomId } from './api_chatroom';
import type { api_profile, api_profileId } from './api_profile';

export interface api_chatroom_usersAttributes {
  id: number;
  chatroom_id: number;
  profile_id: number;
}

export type api_chatroom_usersPk = "id";
export type api_chatroom_usersId = api_chatroom_users[api_chatroom_usersPk];
export type api_chatroom_usersOptionalAttributes = "id";
export type api_chatroom_usersCreationAttributes = Optional<api_chatroom_usersAttributes, api_chatroom_usersOptionalAttributes>;

export class api_chatroom_users extends Model<api_chatroom_usersAttributes, api_chatroom_usersCreationAttributes> implements api_chatroom_usersAttributes {
  id!: number;
  chatroom_id!: number;
  profile_id!: number;

  // api_chatroom_users belongsTo api_chatroom via chatroom_id
  chatroom!: api_chatroom;
  getChatroom!: Sequelize.BelongsToGetAssociationMixin<api_chatroom>;
  setChatroom!: Sequelize.BelongsToSetAssociationMixin<api_chatroom, api_chatroomId>;
  createChatroom!: Sequelize.BelongsToCreateAssociationMixin<api_chatroom>;
  // api_chatroom_users belongsTo api_profile via profile_id
  profile!: api_profile;
  getProfile!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setProfile!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createProfile!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_chatroom_users {
    return api_chatroom_users.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    chatroom_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_chatroom',
        key: 'id'
      },
      unique: "api_chatroom_users_chatroom_id_profile_id_97a421d6_uniq"
    },
    profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_profile',
        key: 'id'
      },
      unique: "api_chatroom_users_chatroom_id_profile_id_97a421d6_uniq"
    }
  }, {
    sequelize,
    tableName: 'api_chatroom_users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_chatroom_users_chatroom_id_108dd767",
        fields: [
          { name: "chatroom_id" },
        ]
      },
      {
        name: "api_chatroom_users_chatroom_id_profile_id_97a421d6_uniq",
        unique: true,
        fields: [
          { name: "chatroom_id" },
          { name: "profile_id" },
        ]
      },
      {
        name: "api_chatroom_users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_chatroom_users_profile_id_5a4c8ebc",
        fields: [
          { name: "profile_id" },
        ]
      },
    ]
  });
  }
}
