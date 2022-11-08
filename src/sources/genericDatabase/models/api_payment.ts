import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_membership, api_membershipId } from './api_membership';
import type { api_profile, api_profileId } from './api_profile';

export interface api_paymentAttributes {
  id: number;
  created: Date;
  updated: Date;
  external_id?: string;
  status: string;
  paymentmethod: string;
  membership_id: number;
  user_id: number;
  from_app: boolean;
  type: string;
}

export type api_paymentPk = "id";
export type api_paymentId = api_payment[api_paymentPk];
export type api_paymentOptionalAttributes = "id" | "external_id";
export type api_paymentCreationAttributes = Optional<api_paymentAttributes, api_paymentOptionalAttributes>;

export class api_payment extends Model<api_paymentAttributes, api_paymentCreationAttributes> implements api_paymentAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  external_id?: string;
  status!: string;
  paymentmethod!: string;
  membership_id!: number;
  user_id!: number;
  from_app!: boolean;
  type!: string;

  // api_payment belongsTo api_membership via membership_id
  membership!: api_membership;
  getMembership!: Sequelize.BelongsToGetAssociationMixin<api_membership>;
  setMembership!: Sequelize.BelongsToSetAssociationMixin<api_membership, api_membershipId>;
  createMembership!: Sequelize.BelongsToCreateAssociationMixin<api_membership>;
  // api_payment belongsTo api_profile via user_id
  user!: api_profile;
  getUser!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_payment {
    return api_payment.init({
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
    external_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    paymentmethod: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    membership_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_membership',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_profile',
        key: 'id'
      }
    },
    from_app: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'api_payment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_payment_membership_id_25ecd4c7",
        fields: [
          { name: "membership_id" },
        ]
      },
      {
        name: "api_payment_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_payment_user_id_d7835ec0",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
