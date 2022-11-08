import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_profile, api_profileId } from './api_profile';

export interface api_crpaymentsaccountAttributes {
  id: number;
  account_holder_name: string;
  account_holder_type: string;
  bank_name: string;
  country: string;
  currency: string;
  status: string;
  saving: boolean;
  swift_code: string;
  bank_account: string;
  profile_id: number;
}

export type api_crpaymentsaccountPk = "id";
export type api_crpaymentsaccountId = api_crpaymentsaccount[api_crpaymentsaccountPk];
export type api_crpaymentsaccountOptionalAttributes = "id";
export type api_crpaymentsaccountCreationAttributes = Optional<api_crpaymentsaccountAttributes, api_crpaymentsaccountOptionalAttributes>;

export class api_crpaymentsaccount extends Model<api_crpaymentsaccountAttributes, api_crpaymentsaccountCreationAttributes> implements api_crpaymentsaccountAttributes {
  id!: number;
  account_holder_name!: string;
  account_holder_type!: string;
  bank_name!: string;
  country!: string;
  currency!: string;
  status!: string;
  saving!: boolean;
  swift_code!: string;
  bank_account!: string;
  profile_id!: number;

  // api_crpaymentsaccount belongsTo api_profile via profile_id
  profile!: api_profile;
  getProfile!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setProfile!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createProfile!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_crpaymentsaccount {
    return api_crpaymentsaccount.init({
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
    bank_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(2),
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
    saving: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    swift_code: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    bank_account: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: "api_crpaymentsaccount_bank_account_577d953f_uniq"
    },
    profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_profile',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_crpaymentsaccount',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_cr_paymentsaccounts_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_cr_paymentsaccounts_profile_id_2e08d386",
        fields: [
          { name: "profile_id" },
        ]
      },
      {
        name: "api_crpaymentsaccount_bank_account_577d953f_like",
        fields: [
          { name: "bank_account" },
        ]
      },
      {
        name: "api_crpaymentsaccount_bank_account_577d953f_uniq",
        unique: true,
        fields: [
          { name: "bank_account" },
        ]
      },
    ]
  });
  }
}
