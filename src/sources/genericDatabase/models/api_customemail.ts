import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_profile, api_profileId } from './api_profile';

export interface api_customemailAttributes {
  id: number;
  created: Date;
  updated: Date;
  title: string;
  subject: string;
  text: string;
  toUser_id: number;
}

export type api_customemailPk = "id";
export type api_customemailId = api_customemail[api_customemailPk];
export type api_customemailOptionalAttributes = "id" | "created";
export type api_customemailCreationAttributes = Optional<api_customemailAttributes, api_customemailOptionalAttributes>;

export class api_customemail extends Model<api_customemailAttributes, api_customemailCreationAttributes> implements api_customemailAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  title!: string;
  subject!: string;
  text!: string;
  toUser_id!: number;

  // api_customemail belongsTo api_profile via toUser_id
  toUser!: api_profile;
  getToUser!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setToUser!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createToUser!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_customemail {
    return api_customemail.init({
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
      type: DataTypes.STRING(3000),
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(3000),
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    toUser_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_profile',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_customemail',
    schema: 'public',
      updatedAt: "updated",
      createdAt: "created",
    timestamps: true,
    indexes: [
      {
        name: "api_customemail_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_customemail_toUser_id_ce789142",
        fields: [
          { name: "toUser_id" },
        ]
      },
    ]
  });
  }
}
