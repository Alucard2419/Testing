import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_generalnotification, api_generalnotificationId } from './api_generalnotification';

export interface api_topicAttributes {
  id: number;
  created: Date;
  updated: Date;
  topic: string;
  description: string;
}

export type api_topicPk = "id";
export type api_topicId = api_topic[api_topicPk];
export type api_topicOptionalAttributes = "id";
export type api_topicCreationAttributes = Optional<api_topicAttributes, api_topicOptionalAttributes>;

export class api_topic extends Model<api_topicAttributes, api_topicCreationAttributes> implements api_topicAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  topic!: string;
  description!: string;

  // api_topic hasMany api_generalnotification via topic_id
  api_generalnotifications!: api_generalnotification[];
  getApi_generalnotifications!: Sequelize.HasManyGetAssociationsMixin<api_generalnotification>;
  setApi_generalnotifications!: Sequelize.HasManySetAssociationsMixin<api_generalnotification, api_generalnotificationId>;
  addApi_generalnotification!: Sequelize.HasManyAddAssociationMixin<api_generalnotification, api_generalnotificationId>;
  addApi_generalnotifications!: Sequelize.HasManyAddAssociationsMixin<api_generalnotification, api_generalnotificationId>;
  createApi_generalnotification!: Sequelize.HasManyCreateAssociationMixin<api_generalnotification>;
  removeApi_generalnotification!: Sequelize.HasManyRemoveAssociationMixin<api_generalnotification, api_generalnotificationId>;
  removeApi_generalnotifications!: Sequelize.HasManyRemoveAssociationsMixin<api_generalnotification, api_generalnotificationId>;
  hasApi_generalnotification!: Sequelize.HasManyHasAssociationMixin<api_generalnotification, api_generalnotificationId>;
  hasApi_generalnotifications!: Sequelize.HasManyHasAssociationsMixin<api_generalnotification, api_generalnotificationId>;
  countApi_generalnotifications!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_topic {
    return api_topic.init({
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
    topic: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'api_topic',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_topic_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
