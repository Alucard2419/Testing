import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_membership, api_membershipId } from './api_membership';
import type { api_membershipdetails, api_membershipdetailsId } from './api_membershipdetails';

export interface api_membership_detailsAttributes {
  id: number;
  membership_id: number;
  membershipdetails_id: number;
}

export type api_membership_detailsPk = "id";
export type api_membership_detailsId = api_membership_details[api_membership_detailsPk];
export type api_membership_detailsOptionalAttributes = "id";
export type api_membership_detailsCreationAttributes = Optional<api_membership_detailsAttributes, api_membership_detailsOptionalAttributes>;

export class api_membership_details extends Model<api_membership_detailsAttributes, api_membership_detailsCreationAttributes> implements api_membership_detailsAttributes {
  id!: number;
  membership_id!: number;
  membershipdetails_id!: number;

  // api_membership_details belongsTo api_membership via membership_id
  membership!: api_membership;
  getMembership!: Sequelize.BelongsToGetAssociationMixin<api_membership>;
  setMembership!: Sequelize.BelongsToSetAssociationMixin<api_membership, api_membershipId>;
  createMembership!: Sequelize.BelongsToCreateAssociationMixin<api_membership>;
  // api_membership_details belongsTo api_membershipdetails via membershipdetails_id
  membershipdetail!: api_membershipdetails;
  getMembershipdetail!: Sequelize.BelongsToGetAssociationMixin<api_membershipdetails>;
  setMembershipdetail!: Sequelize.BelongsToSetAssociationMixin<api_membershipdetails, api_membershipdetailsId>;
  createMembershipdetail!: Sequelize.BelongsToCreateAssociationMixin<api_membershipdetails>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_membership_details {
    return api_membership_details.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    membership_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_membership',
        key: 'id'
      },
      unique: "api_membership_details_membership_id_membership_0ef3f351_uniq"
    },
    membershipdetails_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_membershipdetails',
        key: 'id'
      },
      unique: "api_membership_details_membership_id_membership_0ef3f351_uniq"
    }
  }, {
    sequelize,
    tableName: 'api_membership_details',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_membership_details_membership_id_d5d46baa",
        fields: [
          { name: "membership_id" },
        ]
      },
      {
        name: "api_membership_details_membership_id_membership_0ef3f351_uniq",
        unique: true,
        fields: [
          { name: "membership_id" },
          { name: "membershipdetails_id" },
        ]
      },
      {
        name: "api_membership_details_membershipdetails_id_d5a910d2",
        fields: [
          { name: "membershipdetails_id" },
        ]
      },
      {
        name: "api_membership_details_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
