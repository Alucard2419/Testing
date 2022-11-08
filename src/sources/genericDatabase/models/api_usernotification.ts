import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_profile, api_profileId } from './api_profile';

export interface api_usernotificationAttributes {
  id: number;
  created: Date;
  updated: Date;
  text: string;
  user_id: number;
}

export type api_usernotificationPk = "id";
export type api_usernotificationId = api_usernotification[api_usernotificationPk];
export type api_usernotificationOptionalAttributes = "id" | "created";
export type api_usernotificationCreationAttributes = Optional<api_usernotificationAttributes, api_usernotificationOptionalAttributes>;

export class api_usernotification extends Model<api_usernotificationAttributes, api_usernotificationCreationAttributes> implements api_usernotificationAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  text!: string;
  user_id!: number;

  // api_usernotification belongsTo api_profile via user_id
  user!: api_profile;
  getUser!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_usernotification {
    return api_usernotification.init({
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_profile',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_usernotification',
    schema: 'public',
      updatedAt: "updated",
      createdAt: "created",
    timestamps: true,
    indexes: [
      {
        name: "api_usernotification_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_usernotification_user_id_17a97e4f",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
