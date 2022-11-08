import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_profile, api_profileId } from './api_profile';

export interface api_socialaccountAttributes {
  id: number;
  created: Date;
  updated: Date;
  social_id: string;
  provider: number;
  access_token: string;
  profile_id: number;
}

export type api_socialaccountPk = "id";
export type api_socialaccountId = api_socialaccount[api_socialaccountPk];
export type api_socialaccountOptionalAttributes = "id";
export type api_socialaccountCreationAttributes = Optional<api_socialaccountAttributes, api_socialaccountOptionalAttributes>;

export class api_socialaccount extends Model<api_socialaccountAttributes, api_socialaccountCreationAttributes> implements api_socialaccountAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  social_id!: string;
  provider!: number;
  access_token!: string;
  profile_id!: number;

  // api_socialaccount belongsTo api_profile via profile_id
  profile!: api_profile;
  getProfile!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setProfile!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createProfile!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_socialaccount {
    return api_socialaccount.init({
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
    social_id: {
      type: DataTypes.STRING(54),
      allowNull: false,
      unique: "unique_social_id_in_each_provider"
    },
    provider: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "users_can_only_have_one_associated_account_in_each_provider"
    },
    access_token: {
      type: DataTypes.STRING(870),
      allowNull: false
    },
    profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_profile',
        key: 'id'
      },
      unique: "users_can_only_have_one_associated_account_in_each_provider"
    }
  }, {
    sequelize,
    tableName: 'api_socialaccount',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_socialaccount_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_socialaccount_profile_id_7977f174",
        fields: [
          { name: "profile_id" },
        ]
      },
      {
        name: "unique_social_id_in_each_provider",
        unique: true,
        fields: [
          { name: "social_id" },
          { name: "provider" },
        ]
      },
      {
        name: "users_can_only_have_one_associated_account_in_each_provider",
        unique: true,
        fields: [
          { name: "provider" },
          { name: "profile_id" },
        ]
      },
    ]
  });
  }
}
