import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_chatmessages, api_chatmessagesId } from './api_chatmessages';
import type { api_chatroom_inactive_users, api_chatroom_inactive_usersId } from './api_chatroom_inactive_users';
import type { api_chatroom_users, api_chatroom_usersId } from './api_chatroom_users';
import type { api_service, api_serviceId } from './api_service';

export interface api_chatroomAttributes {
  id: number;
  created: Date;
  updated: Date;
  title: string;
  cover: string;
  owner_name: string;
  service_id?: number;
}

export type api_chatroomPk = "id";
export type api_chatroomId = api_chatroom[api_chatroomPk];
export type api_chatroomOptionalAttributes = "id" | "service_id";
export type api_chatroomCreationAttributes = Optional<api_chatroomAttributes, api_chatroomOptionalAttributes>;

export class api_chatroom extends Model<api_chatroomAttributes, api_chatroomCreationAttributes> implements api_chatroomAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  title!: string;
  cover!: string;
  owner_name!: string;
  service_id?: number;

  // api_chatroom hasMany api_chatmessages via chatroom_id
  api_chatmessages!: api_chatmessages[];
  getApi_chatmessages!: Sequelize.HasManyGetAssociationsMixin<api_chatmessages>;
  setApi_chatmessages!: Sequelize.HasManySetAssociationsMixin<api_chatmessages, api_chatmessagesId>;
  addApi_chatmessage!: Sequelize.HasManyAddAssociationMixin<api_chatmessages, api_chatmessagesId>;
  addApi_chatmessages!: Sequelize.HasManyAddAssociationsMixin<api_chatmessages, api_chatmessagesId>;
  createApi_chatmessage!: Sequelize.HasManyCreateAssociationMixin<api_chatmessages>;
  removeApi_chatmessage!: Sequelize.HasManyRemoveAssociationMixin<api_chatmessages, api_chatmessagesId>;
  removeApi_chatmessages!: Sequelize.HasManyRemoveAssociationsMixin<api_chatmessages, api_chatmessagesId>;
  hasApi_chatmessage!: Sequelize.HasManyHasAssociationMixin<api_chatmessages, api_chatmessagesId>;
  hasApi_chatmessages!: Sequelize.HasManyHasAssociationsMixin<api_chatmessages, api_chatmessagesId>;
  countApi_chatmessages!: Sequelize.HasManyCountAssociationsMixin;
  // api_chatroom hasMany api_chatroom_inactive_users via chatroom_id
  api_chatroom_inactive_users!: api_chatroom_inactive_users[];
  getApi_chatroom_inactive_users!: Sequelize.HasManyGetAssociationsMixin<api_chatroom_inactive_users>;
  setApi_chatroom_inactive_users!: Sequelize.HasManySetAssociationsMixin<api_chatroom_inactive_users, api_chatroom_inactive_usersId>;
  addApi_chatroom_inactive_user!: Sequelize.HasManyAddAssociationMixin<api_chatroom_inactive_users, api_chatroom_inactive_usersId>;
  addApi_chatroom_inactive_users!: Sequelize.HasManyAddAssociationsMixin<api_chatroom_inactive_users, api_chatroom_inactive_usersId>;
  createApi_chatroom_inactive_user!: Sequelize.HasManyCreateAssociationMixin<api_chatroom_inactive_users>;
  removeApi_chatroom_inactive_user!: Sequelize.HasManyRemoveAssociationMixin<api_chatroom_inactive_users, api_chatroom_inactive_usersId>;
  removeApi_chatroom_inactive_users!: Sequelize.HasManyRemoveAssociationsMixin<api_chatroom_inactive_users, api_chatroom_inactive_usersId>;
  hasApi_chatroom_inactive_user!: Sequelize.HasManyHasAssociationMixin<api_chatroom_inactive_users, api_chatroom_inactive_usersId>;
  hasApi_chatroom_inactive_users!: Sequelize.HasManyHasAssociationsMixin<api_chatroom_inactive_users, api_chatroom_inactive_usersId>;
  countApi_chatroom_inactive_users!: Sequelize.HasManyCountAssociationsMixin;
  // api_chatroom hasMany api_chatroom_users via chatroom_id
  api_chatroom_users!: api_chatroom_users[];
  getApi_chatroom_users!: Sequelize.HasManyGetAssociationsMixin<api_chatroom_users>;
  setApi_chatroom_users!: Sequelize.HasManySetAssociationsMixin<api_chatroom_users, api_chatroom_usersId>;
  addApi_chatroom_user!: Sequelize.HasManyAddAssociationMixin<api_chatroom_users, api_chatroom_usersId>;
  addApi_chatroom_users!: Sequelize.HasManyAddAssociationsMixin<api_chatroom_users, api_chatroom_usersId>;
  createApi_chatroom_user!: Sequelize.HasManyCreateAssociationMixin<api_chatroom_users>;
  removeApi_chatroom_user!: Sequelize.HasManyRemoveAssociationMixin<api_chatroom_users, api_chatroom_usersId>;
  removeApi_chatroom_users!: Sequelize.HasManyRemoveAssociationsMixin<api_chatroom_users, api_chatroom_usersId>;
  hasApi_chatroom_user!: Sequelize.HasManyHasAssociationMixin<api_chatroom_users, api_chatroom_usersId>;
  hasApi_chatroom_users!: Sequelize.HasManyHasAssociationsMixin<api_chatroom_users, api_chatroom_usersId>;
  countApi_chatroom_users!: Sequelize.HasManyCountAssociationsMixin;
  // api_chatroom belongsTo api_service via service_id
  service!: api_service;
  getService!: Sequelize.BelongsToGetAssociationMixin<api_service>;
  setService!: Sequelize.BelongsToSetAssociationMixin<api_service, api_serviceId>;
  createService!: Sequelize.BelongsToCreateAssociationMixin<api_service>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_chatroom {
    return api_chatroom.init({
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
    title: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    cover: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    owner_name: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'api_service',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_chatroom',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_chatroom_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_chatroom_service_id_07446212",
        fields: [
          { name: "service_id" },
        ]
      },
    ]
  });
  }
}
