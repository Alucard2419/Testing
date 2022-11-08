import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_section, api_sectionId } from './api_section';

export interface api_departmentAttributes {
  id: number;
  created: Date;
  updated: Date;
  es_name: string;
  en_name: string;
  icon: string;
  cover: string;
}

export type api_departmentPk = "id";
export type api_departmentId = api_department[api_departmentPk];
export type api_departmentOptionalAttributes = "id";
export type api_departmentCreationAttributes = Optional<api_departmentAttributes, api_departmentOptionalAttributes>;

export class api_department extends Model<api_departmentAttributes, api_departmentCreationAttributes> implements api_departmentAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  es_name!: string;
  en_name!: string;
  icon!: string;
  cover!: string;

  // api_department hasMany api_section via department_id
  api_sections!: api_section[];
  getApi_sections!: Sequelize.HasManyGetAssociationsMixin<api_section>;
  setApi_sections!: Sequelize.HasManySetAssociationsMixin<api_section, api_sectionId>;
  addApi_section!: Sequelize.HasManyAddAssociationMixin<api_section, api_sectionId>;
  addApi_sections!: Sequelize.HasManyAddAssociationsMixin<api_section, api_sectionId>;
  createApi_section!: Sequelize.HasManyCreateAssociationMixin<api_section>;
  removeApi_section!: Sequelize.HasManyRemoveAssociationMixin<api_section, api_sectionId>;
  removeApi_sections!: Sequelize.HasManyRemoveAssociationsMixin<api_section, api_sectionId>;
  hasApi_section!: Sequelize.HasManyHasAssociationMixin<api_section, api_sectionId>;
  hasApi_sections!: Sequelize.HasManyHasAssociationsMixin<api_section, api_sectionId>;
  countApi_sections!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_department {
    return api_department.init({
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
    es_name: {
      type: DataTypes.STRING(35),
      allowNull: false,
      unique: "api_department_es_name_key"
    },
    en_name: {
      type: DataTypes.STRING(35),
      allowNull: false,
      unique: "api_department_en_name_key"
    },
    icon: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cover: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'api_department',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_department_en_name_af773a8d_like",
        fields: [
          { name: "en_name" },
        ]
      },
      {
        name: "api_department_en_name_key",
        unique: true,
        fields: [
          { name: "en_name" },
        ]
      },
      {
        name: "api_department_es_name_7d5c67d2_like",
        fields: [
          { name: "es_name" },
        ]
      },
      {
        name: "api_department_es_name_key",
        unique: true,
        fields: [
          { name: "es_name" },
        ]
      },
      {
        name: "api_department_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
