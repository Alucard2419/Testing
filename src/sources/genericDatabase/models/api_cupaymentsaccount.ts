import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_cubanbank, api_cubanbankId } from './api_cubanbank';
import type { api_profile, api_profileId } from './api_profile';

export interface api_cupaymentsaccountAttributes {
  id: number;
  account_holder_name: string;
  account_holder_type: string;
  currency: string;
  status: string;
  bank_account: string;
  image: string;
  profile_id: number;
  activate: boolean;
  bank_id: number;
}

export type api_cupaymentsaccountPk = "id";
export type api_cupaymentsaccountId = api_cupaymentsaccount[api_cupaymentsaccountPk];
export type api_cupaymentsaccountOptionalAttributes = "id";
export type api_cupaymentsaccountCreationAttributes = Optional<api_cupaymentsaccountAttributes, api_cupaymentsaccountOptionalAttributes>;

export class api_cupaymentsaccount extends Model<api_cupaymentsaccountAttributes, api_cupaymentsaccountCreationAttributes> implements api_cupaymentsaccountAttributes {
  id!: number;
  account_holder_name!: string;
  account_holder_type!: string;
  currency!: string;
  status!: string;
  bank_account!: string;
  image!: string;
  profile_id!: number;
  activate!: boolean;
  bank_id!: number;

  // api_cupaymentsaccount belongsTo api_cubanbank via bank_id
  bank!: api_cubanbank;
  getBank!: Sequelize.BelongsToGetAssociationMixin<api_cubanbank>;
  setBank!: Sequelize.BelongsToSetAssociationMixin<api_cubanbank, api_cubanbankId>;
  createBank!: Sequelize.BelongsToCreateAssociationMixin<api_cubanbank>;
  // api_cupaymentsaccount belongsTo api_profile via profile_id
  profile!: api_profile;
  getProfile!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setProfile!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createProfile!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_cupaymentsaccount {
    return api_cupaymentsaccount.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    account_holder_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    account_holder_type: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    bank_account: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(100),
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
    activate: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    bank_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_cubanbank',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_cupaymentsaccount',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_cupaymentsaccount_bank_id_2ed17f2d",
        fields: [
          { name: "bank_id" },
        ]
      },
      {
        name: "api_cupaymentsaccount_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_cupaymentsaccount_profile_id_4d96db77",
        fields: [
          { name: "profile_id" },
        ]
      },
    ]
  });
  }
}
