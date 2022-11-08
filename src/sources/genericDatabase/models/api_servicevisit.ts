import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_profile, api_profileId } from './api_profile';
import type { api_service, api_serviceId } from './api_service';

export interface api_servicevisitAttributes {
  id: number;
  created: Date;
  service_id: number;
  author_id: number;
}

export type api_servicevisitPk = "id";
export type api_servicevisitId = api_servicevisit[api_servicevisitPk];
export type api_servicevisitOptionalAttributes = "id";
export type api_servicevisitCreationAttributes = Optional<api_servicevisitAttributes, api_servicevisitOptionalAttributes>;

export class api_servicevisit extends Model<api_servicevisitAttributes, api_servicevisitCreationAttributes> implements api_servicevisitAttributes {
  id!: number;
  created!: Date;
  service_id!: number;
  author_id!: number;

  // api_servicevisit belongsTo api_profile via author_id
  author!: api_profile;
  getAuthor!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setAuthor!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createAuthor!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;
  // api_servicevisit belongsTo api_service via service_id
  service!: api_service;
  getService!: Sequelize.BelongsToGetAssociationMixin<api_service>;
  setService!: Sequelize.BelongsToSetAssociationMixin<api_service, api_serviceId>;
  createService!: Sequelize.BelongsToCreateAssociationMixin<api_service>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_servicevisit {
    return api_servicevisit.init({
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
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_service',
        key: 'id'
      }
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_profile',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_servicevisit',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_servicevisit_author_id_566f5e40",
        fields: [
          { name: "author_id" },
        ]
      },
      {
        name: "api_servicevisit_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_servicevisit_service_id_77940acd",
        fields: [
          { name: "service_id" },
        ]
      },
    ]
  });
  }
}
