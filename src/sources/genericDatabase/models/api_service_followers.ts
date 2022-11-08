import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_profile, api_profileId } from './api_profile';
import type { api_service, api_serviceId } from './api_service';

export interface api_service_followersAttributes {
  id: number;
  service_id: number;
  profile_id: number;
}

export type api_service_followersPk = "id";
export type api_service_followersId = api_service_followers[api_service_followersPk];
export type api_service_followersOptionalAttributes = "id";
export type api_service_followersCreationAttributes = Optional<api_service_followersAttributes, api_service_followersOptionalAttributes>;

export class api_service_followers extends Model<api_service_followersAttributes, api_service_followersCreationAttributes> implements api_service_followersAttributes {
  id!: number;
  service_id!: number;
  profile_id!: number;

  // api_service_followers belongsTo api_profile via profile_id
  profile!: api_profile;
  getProfile!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setProfile!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createProfile!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;
  // api_service_followers belongsTo api_service via service_id
  service!: api_service;
  getService!: Sequelize.BelongsToGetAssociationMixin<api_service>;
  setService!: Sequelize.BelongsToSetAssociationMixin<api_service, api_serviceId>;
  createService!: Sequelize.BelongsToCreateAssociationMixin<api_service>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_service_followers {
    return api_service_followers.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_service',
        key: 'id'
      },
      unique: "api_service_followers_service_id_profile_id_38e97f1e_uniq"
    },
    profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_profile',
        key: 'id'
      },
      unique: "api_service_followers_service_id_profile_id_38e97f1e_uniq"
    }
  }, {
    sequelize,
    tableName: 'api_service_followers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_service_followers_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_service_followers_profile_id_00ff146a",
        fields: [
          { name: "profile_id" },
        ]
      },
      {
        name: "api_service_followers_service_id_03982882",
        fields: [
          { name: "service_id" },
        ]
      },
      {
        name: "api_service_followers_service_id_profile_id_38e97f1e_uniq",
        unique: true,
        fields: [
          { name: "service_id" },
          { name: "profile_id" },
        ]
      },
    ]
  });
  }
}
