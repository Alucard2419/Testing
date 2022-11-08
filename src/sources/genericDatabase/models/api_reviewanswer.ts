import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_profile, api_profileId } from './api_profile';
import type { api_review, api_reviewId } from './api_review';

export interface api_reviewanswerAttributes {
  id: number;
  created: Date;
  updated: Date;
  text: string;
  profile_id: number;
  review_id: number;
  approved: boolean;
}

export type api_reviewanswerPk = "id";
export type api_reviewanswerId = api_reviewanswer[api_reviewanswerPk];
export type api_reviewanswerOptionalAttributes = "id";
export type api_reviewanswerCreationAttributes = Optional<api_reviewanswerAttributes, api_reviewanswerOptionalAttributes>;

export class api_reviewanswer extends Model<api_reviewanswerAttributes, api_reviewanswerCreationAttributes> implements api_reviewanswerAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  text!: string;
  profile_id!: number;
  review_id!: number;
  approved!: boolean;

  // api_reviewanswer belongsTo api_profile via profile_id
  profile!: api_profile;
  getProfile!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setProfile!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createProfile!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;
  // api_reviewanswer belongsTo api_review via review_id
  review!: api_review;
  getReview!: Sequelize.BelongsToGetAssociationMixin<api_review>;
  setReview!: Sequelize.BelongsToSetAssociationMixin<api_review, api_reviewId>;
  createReview!: Sequelize.BelongsToCreateAssociationMixin<api_review>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_reviewanswer {
    return api_reviewanswer.init({
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
    text: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_profile',
        key: 'id'
      }
    },
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_review',
        key: 'id'
      },
      unique: "api_reviewanswer_review_id_key"
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'api_reviewanswer',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_reviewanswer_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_reviewanswer_profile_id_07fcf80b",
        fields: [
          { name: "profile_id" },
        ]
      },
      {
        name: "api_reviewanswer_review_id_key",
        unique: true,
        fields: [
          { name: "review_id" },
        ]
      },
    ]
  });
  }
}
