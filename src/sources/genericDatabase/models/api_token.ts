import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_profile, api_profileId } from './api_profile';

export interface api_tokenAttributes {
  id: number;
  created: Date;
  updated: Date;
  token: string;
  user_id: number;
}

export type api_tokenPk = "id";
export type api_tokenId = api_token[api_tokenPk];
export type api_tokenOptionalAttributes = "id";
export type api_tokenCreationAttributes = Optional<api_tokenAttributes, api_tokenOptionalAttributes>;

export class api_token extends Model<api_tokenAttributes, api_tokenCreationAttributes> implements api_tokenAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  token!: string;
  user_id!: number;

  // api_token belongsTo api_profile via user_id
  user!: api_profile;
  getUser!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_token {
    return api_token.init({
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
    token: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_profile',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_token',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_token_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_token_user_id_b646d2e7",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
