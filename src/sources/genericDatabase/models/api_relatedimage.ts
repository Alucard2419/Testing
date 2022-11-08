import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { django_content_type, django_content_typeId } from './django_content_type';

export interface api_relatedimageAttributes {
  id: number;
  image: string;
  object_id: number;
  content_type_id: number;
}

export type api_relatedimagePk = "id";
export type api_relatedimageId = api_relatedimage[api_relatedimagePk];
export type api_relatedimageOptionalAttributes = "id";
export type api_relatedimageCreationAttributes = Optional<api_relatedimageAttributes, api_relatedimageOptionalAttributes>;

export class api_relatedimage extends Model<api_relatedimageAttributes, api_relatedimageCreationAttributes> implements api_relatedimageAttributes {
  id!: number;
  image!: string;
  object_id!: number;
  content_type_id!: number;

  // api_relatedimage belongsTo django_content_type via content_type_id
  content_type!: django_content_type;
  getContent_type!: Sequelize.BelongsToGetAssociationMixin<django_content_type>;
  setContent_type!: Sequelize.BelongsToSetAssociationMixin<django_content_type, django_content_typeId>;
  createContent_type!: Sequelize.BelongsToCreateAssociationMixin<django_content_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof api_relatedimage {
    return api_relatedimage.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    object_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'django_content_type',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'api_relatedimage',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_relatedimage_content_type_id_cf4da71c",
        fields: [
          { name: "content_type_id" },
        ]
      },
      {
        name: "api_relatedimage_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
