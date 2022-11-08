import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_topic, api_topicId } from './api_topic';

export interface api_generalnotificationAttributes {
  id: number;
  created: Date;
  updated: Date;
  text: string;
  topic_id: number;
}

export type api_generalnotificationPk = "id";
export type api_generalnotificationId = api_generalnotification[api_generalnotificationPk];
export type api_generalnotificationOptionalAttributes = "id" | "created";
export type api_generalnotificationCreationAttributes = Optional<api_generalnotificationAttributes, api_generalnotificationOptionalAttributes>;

export class api_generalnotification extends Model<api_generalnotificationAttributes, api_generalnotificationCreationAttributes> implements api_generalnotificationAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  text!: string;
  topic_id!: number;

  // api_generalnotification belongsTo api_topic via topic_id
  topic!: api_topic;
  getTopic!: Sequelize.BelongsToGetAssociationMixin<api_topic>;
  setTopic!: Sequelize.BelongsToSetAssociationMixin<api_topic, api_topicId>;
  createTopic!: Sequelize.BelongsToCreateAssociationMixin<api_topic>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_generalnotification {
    return api_generalnotification.init({
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
      type: DataTypes.TEXT,
      allowNull: false
    },
    topic_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_topic',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_generalnotification',
    schema: 'public',
      updatedAt: "updated",
      createdAt: "created",
    timestamps: true,
    indexes: [
      {
        name: "api_generalnotification_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_generalnotification_topic_id_d1a8e03d",
        fields: [
          { name: "topic_id" },
        ]
      },
    ]
  });
  }
}
