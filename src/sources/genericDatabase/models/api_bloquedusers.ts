import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_profile, api_profileId } from './api_profile';

export interface api_bloquedusersAttributes {
  id: number;
  created: Date;
  updated: Date;
  profile_id: number;
  user_bloqued_id: number;
}

export type api_bloquedusersPk = "id";
export type api_bloquedusersId = api_bloquedusers[api_bloquedusersPk];
export type api_bloquedusersOptionalAttributes = "id";
export type api_bloquedusersCreationAttributes = Optional<api_bloquedusersAttributes, api_bloquedusersOptionalAttributes>;

export class api_bloquedusers extends Model<api_bloquedusersAttributes, api_bloquedusersCreationAttributes> implements api_bloquedusersAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  profile_id!: number;
  user_bloqued_id!: number;

  // api_bloquedusers belongsTo api_profile via profile_id
  profile!: api_profile;
  getProfile!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setProfile!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createProfile!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;
  // api_bloquedusers belongsTo api_profile via user_bloqued_id
  user_bloqued!: api_profile;
  getUser_bloqued!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setUser_bloqued!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createUser_bloqued!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_bloquedusers {
    return api_bloquedusers.init({
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
    profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_profile',
        key: 'id'
      },
      unique: "user_can_only_block_user_one_time"
    },
    user_bloqued_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_profile',
        key: 'id'
      },
      unique: "user_can_only_block_user_one_time"
    }
  }, {
    sequelize,
    tableName: 'api_bloquedusers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_bloquedusers_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_bloquedusers_profile_id_9dcbcbfa",
        fields: [
          { name: "profile_id" },
        ]
      },
      {
        name: "api_bloquedusers_user_bloqued_id_5f14db8a",
        fields: [
          { name: "user_bloqued_id" },
        ]
      },
      {
        name: "user_can_only_block_user_one_time",
        unique: true,
        fields: [
          { name: "profile_id" },
          { name: "user_bloqued_id" },
        ]
      },
    ]
  });
  }
}
