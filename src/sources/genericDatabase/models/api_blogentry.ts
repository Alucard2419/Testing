import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface api_blogentryAttributes {
  id: number;
  created: Date;
  updated: Date;
  title: string;
  text: string;
  cover: string;
}

export type api_blogentryPk = "id";
export type api_blogentryId = api_blogentry[api_blogentryPk];
export type api_blogentryOptionalAttributes = "id" | 'created';
export type api_blogentryCreationAttributes = Optional<api_blogentryAttributes, api_blogentryOptionalAttributes>;

export class api_blogentry extends Model<api_blogentryAttributes, api_blogentryCreationAttributes> implements api_blogentryAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  title!: string;
  text!: string;
  cover!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof api_blogentry {
    return api_blogentry.init({
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
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cover: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'api_blogentry',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_blogentry_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
