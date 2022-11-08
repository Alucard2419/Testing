import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface api_categoryAttributes {
  id: number;
  es_name: string;
  en_name: string;
  webMain: boolean;
  mobileMain: boolean;
  icon?: string;
  cover?: string;
  parent_id?: number;
}

export type api_categoryPk = "id";
export type api_categoryId = api_category[api_categoryPk];
export type api_categoryOptionalAttributes = "id" | "icon" | "cover" | "parent_id";
export type api_categoryCreationAttributes = Optional<api_categoryAttributes, api_categoryOptionalAttributes>;

export class api_category extends Model<api_categoryAttributes, api_categoryCreationAttributes> implements api_categoryAttributes {
  id!: number;
  es_name!: string;
  en_name!: string;
  webMain!: boolean;
  mobileMain!: boolean;
  icon?: string;
  cover?: string;
  parent_id?: number;

  // api_category belongsTo api_category via parent_id
  parent!: api_category;
  getParent!: Sequelize.BelongsToGetAssociationMixin<api_category>;
  setParent!: Sequelize.BelongsToSetAssociationMixin<api_category, api_categoryId>;
  createParent!: Sequelize.BelongsToCreateAssociationMixin<api_category>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_category {
    return api_category.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    es_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: "api_category_es_name_key"
    },
    en_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: "api_category_en_name_key"
    },
    webMain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    mobileMain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cover: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'api_category',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_category',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_category_en_name_e7c64289_like",
        fields: [
          { name: "en_name" },
        ]
      },
      {
        name: "api_category_en_name_key",
        unique: true,
        fields: [
          { name: "en_name" },
        ]
      },
      {
        name: "api_category_es_name_cba7f136_like",
        fields: [
          { name: "es_name" },
        ]
      },
      {
        name: "api_category_es_name_key",
        unique: true,
        fields: [
          { name: "es_name" },
        ]
      },
      {
        name: "api_category_parent_id_714127a8",
        fields: [
          { name: "parent_id" },
        ]
      },
      {
        name: "api_category_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
