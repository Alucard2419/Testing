import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_city, api_cityId } from './api_city';
import type { api_profile, api_profileId } from './api_profile';
import type { api_service, api_serviceId } from './api_service';

export interface api_municipalityAttributes {
  id: number;
  created: Date;
  updated: Date;
  lat: number;
  lng: number;
  name: string;
  city_id: number;
}

export type api_municipalityPk = "id";
export type api_municipalityId = api_municipality[api_municipalityPk];
export type api_municipalityOptionalAttributes = "id";
export type api_municipalityCreationAttributes = Optional<api_municipalityAttributes, api_municipalityOptionalAttributes>;

export class api_municipality extends Model<api_municipalityAttributes, api_municipalityCreationAttributes> implements api_municipalityAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  lat!: number;
  lng!: number;
  name!: string;
  city_id!: number;

  // api_municipality belongsTo api_city via city_id
  city!: api_city;
  getCity!: Sequelize.BelongsToGetAssociationMixin<api_city>;
  setCity!: Sequelize.BelongsToSetAssociationMixin<api_city, api_cityId>;
  createCity!: Sequelize.BelongsToCreateAssociationMixin<api_city>;
  // api_municipality hasMany api_profile via municipality_id
  api_profiles!: api_profile[];
  getApi_profiles!: Sequelize.HasManyGetAssociationsMixin<api_profile>;
  setApi_profiles!: Sequelize.HasManySetAssociationsMixin<api_profile, api_profileId>;
  addApi_profile!: Sequelize.HasManyAddAssociationMixin<api_profile, api_profileId>;
  addApi_profiles!: Sequelize.HasManyAddAssociationsMixin<api_profile, api_profileId>;
  createApi_profile!: Sequelize.HasManyCreateAssociationMixin<api_profile>;
  removeApi_profile!: Sequelize.HasManyRemoveAssociationMixin<api_profile, api_profileId>;
  removeApi_profiles!: Sequelize.HasManyRemoveAssociationsMixin<api_profile, api_profileId>;
  hasApi_profile!: Sequelize.HasManyHasAssociationMixin<api_profile, api_profileId>;
  hasApi_profiles!: Sequelize.HasManyHasAssociationsMixin<api_profile, api_profileId>;
  countApi_profiles!: Sequelize.HasManyCountAssociationsMixin;
  // api_municipality hasMany api_service via municipality_id
  api_services!: api_service[];
  getApi_services!: Sequelize.HasManyGetAssociationsMixin<api_service>;
  setApi_services!: Sequelize.HasManySetAssociationsMixin<api_service, api_serviceId>;
  addApi_service!: Sequelize.HasManyAddAssociationMixin<api_service, api_serviceId>;
  addApi_services!: Sequelize.HasManyAddAssociationsMixin<api_service, api_serviceId>;
  createApi_service!: Sequelize.HasManyCreateAssociationMixin<api_service>;
  removeApi_service!: Sequelize.HasManyRemoveAssociationMixin<api_service, api_serviceId>;
  removeApi_services!: Sequelize.HasManyRemoveAssociationsMixin<api_service, api_serviceId>;
  hasApi_service!: Sequelize.HasManyHasAssociationMixin<api_service, api_serviceId>;
  hasApi_services!: Sequelize.HasManyHasAssociationsMixin<api_service, api_serviceId>;
  countApi_services!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_municipality {
    return api_municipality.init({
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
    lat: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    lng: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_city',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_municipality',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_municipality_city_id_9549ecd2",
        fields: [
          { name: "city_id" },
        ]
      },
      {
        name: "api_municipality_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
