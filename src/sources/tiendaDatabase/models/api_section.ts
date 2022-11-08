import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_department, api_departmentId } from './api_department';
import type { api_product, api_productId } from './api_product';

export interface api_sectionAttributes {
  id: number;
  created: Date;
  updated: Date;
  es_name: string;
  en_name: string;
  icon: string;
  cover: string;
  department_id: number;
}

export type api_sectionPk = "id";
export type api_sectionId = api_section[api_sectionPk];
export type api_sectionOptionalAttributes = "id";
export type api_sectionCreationAttributes = Optional<api_sectionAttributes, api_sectionOptionalAttributes>;

export class api_section extends Model<api_sectionAttributes, api_sectionCreationAttributes> implements api_sectionAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  es_name!: string;
  en_name!: string;
  icon!: string;
  cover!: string;
  department_id!: number;

  // api_section belongsTo api_department via department_id
  department!: api_department;
  getDepartment!: Sequelize.BelongsToGetAssociationMixin<api_department>;
  setDepartment!: Sequelize.BelongsToSetAssociationMixin<api_department, api_departmentId>;
  createDepartment!: Sequelize.BelongsToCreateAssociationMixin<api_department>;
  // api_section hasMany api_product via section_id
  api_products!: api_product[];
  getApi_products!: Sequelize.HasManyGetAssociationsMixin<api_product>;
  setApi_products!: Sequelize.HasManySetAssociationsMixin<api_product, api_productId>;
  addApi_product!: Sequelize.HasManyAddAssociationMixin<api_product, api_productId>;
  addApi_products!: Sequelize.HasManyAddAssociationsMixin<api_product, api_productId>;
  createApi_product!: Sequelize.HasManyCreateAssociationMixin<api_product>;
  removeApi_product!: Sequelize.HasManyRemoveAssociationMixin<api_product, api_productId>;
  removeApi_products!: Sequelize.HasManyRemoveAssociationsMixin<api_product, api_productId>;
  hasApi_product!: Sequelize.HasManyHasAssociationMixin<api_product, api_productId>;
  hasApi_products!: Sequelize.HasManyHasAssociationsMixin<api_product, api_productId>;
  countApi_products!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_section {
    return api_section.init({
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
      unique: "api_section_es_name_key"
    },
    en_name: {
      type: DataTypes.STRING(35),
      allowNull: false,
      unique: "api_section_en_name_key"
    },
    icon: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cover: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_department',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_section',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_section_department_id_210c95da",
        fields: [
          { name: "department_id" },
        ]
      },
      {
        name: "api_section_en_name_d9d2e82b_like",
        fields: [
          { name: "en_name" },
        ]
      },
      {
        name: "api_section_en_name_key",
        unique: true,
        fields: [
          { name: "en_name" },
        ]
      },
      {
        name: "api_section_es_name_c871738f_like",
        fields: [
          { name: "es_name" },
        ]
      },
      {
        name: "api_section_es_name_key",
        unique: true,
        fields: [
          { name: "es_name" },
        ]
      },
      {
        name: "api_section_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
