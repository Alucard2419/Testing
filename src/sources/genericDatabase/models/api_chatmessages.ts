import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_chatroom, api_chatroomId } from './api_chatroom';
import type { api_profile, api_profileId } from './api_profile';

export interface api_chatmessagesAttributes {
  id: number;
  created: Date;
  updated: Date;
  text: string;
  chatroom_id: number;
  user_id: number;
  audio: string;
  image: string;
  pending: boolean;
  received: boolean;
  sent: boolean;
  system: boolean;
  video: string;
}

export type api_chatmessagesPk = "id";
export type api_chatmessagesId = api_chatmessages[api_chatmessagesPk];
export type api_chatmessagesOptionalAttributes = "id" | "created";
export type api_chatmessagesCreationAttributes = Optional<api_chatmessagesAttributes, api_chatmessagesOptionalAttributes>;

export class api_chatmessages extends Model<api_chatmessagesAttributes, api_chatmessagesCreationAttributes> implements api_chatmessagesAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  text!: string;
  chatroom_id!: number;
  user_id!: number;
  audio!: string;
  image!: string;
  pending!: boolean;
  received!: boolean;
  sent!: boolean;
  system!: boolean;
  video!: string;

  // api_chatmessages belongsTo api_chatroom via chatroom_id
  chatroom!: api_chatroom;
  getChatroom!: Sequelize.BelongsToGetAssociationMixin<api_chatroom>;
  setChatroom!: Sequelize.BelongsToSetAssociationMixin<api_chatroom, api_chatroomId>;
  createChatroom!: Sequelize.BelongsToCreateAssociationMixin<api_chatroom>;
  // api_chatmessages belongsTo api_profile via user_id
  user!: api_profile;
  getUser!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_chatmessages {
    return api_chatmessages.init({
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
    text: {
      type: DataTypes.STRING(6000),
      allowNull: false
    },
    chatroom_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_chatroom',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_profile',
        key: 'id'
      }
    },
    audio: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    pending: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    received: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sent: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    system: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    video: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'api_chatmessages',
    schema: 'public',
      updatedAt: "updated",
      createdAt: "created",
    timestamps: true,
    indexes: [
      {
        name: "api_chatmessages_chatroom_id_e742c258",
        fields: [
          { name: "chatroom_id" },
        ]
      },
      {
        name: "api_chatmessages_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_chatmessages_user_id_0020c2dd",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
