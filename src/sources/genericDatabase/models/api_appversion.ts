import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface api_appversionAttributes {
  id: number;
  created: Date;
  updated: Date;
  version: string;
  description: string;
  forceUpdate: boolean;
  message: string;
  AppStoreLink: string;
  GooglePlayLink: string;
}

export type api_appversionPk = "id";
export type api_appversionId = api_appversion[api_appversionPk];
export type api_appversionOptionalAttributes = "id" | "created";
export type api_appversionCreationAttributes = Optional<api_appversionAttributes, api_appversionOptionalAttributes>;

export class api_appversion extends Model<api_appversionAttributes, api_appversionCreationAttributes> implements api_appversionAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  version!: string;
  description!: string;
  forceUpdate!: boolean;
  createdAt!: Date;
  message!: string;
  AppStoreLink!: string;
  GooglePlayLink!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof api_appversion {
    return api_appversion.init({
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
    version: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    forceUpdate: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AppStoreLink: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    GooglePlayLink: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'api_appversion',
    schema: 'public',
      updatedAt: "updated",
      createdAt: "created",
    timestamps: true,
    indexes: [
      {
        name: "api_appversion_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
