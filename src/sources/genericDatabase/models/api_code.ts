import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_profile, api_profileId } from './api_profile';

export interface api_codeAttributes {
  id: number;
  created: Date;
  updated: Date;
  number: string;
  user_id: number;
}

export type api_codePk = "id";
export type api_codeId = api_code[api_codePk];
export type api_codeOptionalAttributes = "id";
export type api_codeCreationAttributes = Optional<api_codeAttributes, api_codeOptionalAttributes>;

export class api_code extends Model<api_codeAttributes, api_codeCreationAttributes> implements api_codeAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  number!: string;
  user_id!: number;

  // api_code belongsTo api_profile via user_id
  user!: api_profile;
  getUser!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_code {
    return api_code.init({
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
    number: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_profile',
        key: 'id'
      },
      unique: "api_code_user_id_key"
    }
  }, {
    sequelize,
    tableName: 'api_code',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_code_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_code_user_id_key",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
