import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface api_globalemailAttributes {
  id: number;
  created: Date;
  updated: Date;
  title: string;
  subject: string;
  text: string;

}

export type api_globalemailPk = "id";
export type api_globalemailId = api_globalemail[api_globalemailPk];
export type api_globalemailOptionalAttributes = "id" | "created";
export type api_globalemailCreationAttributes = Optional<api_globalemailAttributes, api_globalemailOptionalAttributes>;

export class api_globalemail extends Model<api_globalemailAttributes, api_globalemailCreationAttributes> implements api_globalemailAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  title!: string;
  subject!: string;
  text!: string;



  static initModel(sequelize: Sequelize.Sequelize): typeof api_globalemail {
    return api_globalemail.init({
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
    }
  }, {
    sequelize,
    tableName: 'api_globalemail',
    schema: 'public',
      updatedAt: "updated",
      createdAt: "created",
    timestamps: true,
    indexes: [
      {
        name: "api_globalemail_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
