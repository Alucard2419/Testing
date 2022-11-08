import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { api_profile, api_profileId } from './api_profile';
import type { api_userreport_details, api_userreport_detailsId } from './api_userreport_details';

export interface api_userreportAttributes {
  id: number;
  created: Date;
  updated: Date;
  from_user_id: number;
  user_id: number;
}

export type api_userreportPk = "id";
export type api_userreportId = api_userreport[api_userreportPk];
export type api_userreportOptionalAttributes = "id";
export type api_userreportCreationAttributes = Optional<api_userreportAttributes, api_userreportOptionalAttributes>;

export class api_userreport extends Model<api_userreportAttributes, api_userreportCreationAttributes> implements api_userreportAttributes {
  id!: number;
  created!: Date;
  updated!: Date;
  from_user_id!: number;
  user_id!: number;

  // api_userreport belongsTo api_profile via from_user_id
  from_user!: api_profile;
  getFrom_user!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setFrom_user!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createFrom_user!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;
  // api_userreport belongsTo api_profile via user_id
  user!: api_profile;
  getUser!: Sequelize.BelongsToGetAssociationMixin<api_profile>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<api_profile, api_profileId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<api_profile>;
  // api_userreport hasMany api_userreport_details via userreport_id
  api_userreport_details!: api_userreport_details[];
  getApi_userreport_details!: Sequelize.HasManyGetAssociationsMixin<api_userreport_details>;
  setApi_userreport_details!: Sequelize.HasManySetAssociationsMixin<api_userreport_details, api_userreport_detailsId>;
  addApi_userreport_detail!: Sequelize.HasManyAddAssociationMixin<api_userreport_details, api_userreport_detailsId>;
  addApi_userreport_details!: Sequelize.HasManyAddAssociationsMixin<api_userreport_details, api_userreport_detailsId>;
  createApi_userreport_detail!: Sequelize.HasManyCreateAssociationMixin<api_userreport_details>;
  removeApi_userreport_detail!: Sequelize.HasManyRemoveAssociationMixin<api_userreport_details, api_userreport_detailsId>;
  removeApi_userreport_details!: Sequelize.HasManyRemoveAssociationsMixin<api_userreport_details, api_userreport_detailsId>;
  hasApi_userreport_detail!: Sequelize.HasManyHasAssociationMixin<api_userreport_details, api_userreport_detailsId>;
  hasApi_userreport_details!: Sequelize.HasManyHasAssociationsMixin<api_userreport_details, api_userreport_detailsId>;
  countApi_userreport_details!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_userreport {
    return api_userreport.init({
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
    from_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'api_profile',
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
    }
  }, {
    sequelize,
    tableName: 'api_userreport',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_userreport_from_user_id_2b4cec24",
        fields: [
          { name: "from_user_id" },
        ]
      },
      {
        name: "api_userreport_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "api_userreport_user_id_5ce42584",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
