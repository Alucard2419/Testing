import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { custom_user_user, custom_user_userId } from './custom_user_user';
import type { django_content_type, django_content_typeId } from './django_content_type';

export interface django_admin_logAttributes {
  id: number;
  action_time: Date;
  object_id?: string;
  object_repr: string;
  action_flag: number;
  change_message: string;
  content_type_id?: number;
  user_id: number;
}

export type django_admin_logPk = "id";
export type django_admin_logId = django_admin_log[django_admin_logPk];
export type django_admin_logOptionalAttributes = "id" | "object_id" | "content_type_id";
export type django_admin_logCreationAttributes = Optional<django_admin_logAttributes, django_admin_logOptionalAttributes>;

export class django_admin_log extends Model<django_admin_logAttributes, django_admin_logCreationAttributes> implements django_admin_logAttributes {
  id!: number;
  action_time!: Date;
  object_id?: string;
  object_repr!: string;
  action_flag!: number;
  change_message!: string;
  content_type_id?: number;
  user_id!: number;

  // django_admin_log belongsTo custom_user_user via user_id
  user!: custom_user_user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<custom_user_user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<custom_user_user, custom_user_userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<custom_user_user>;
  // django_admin_log belongsTo django_content_type via content_type_id
  content_type!: django_content_type;
  getContent_type!: Sequelize.BelongsToGetAssociationMixin<django_content_type>;
  setContent_type!: Sequelize.BelongsToSetAssociationMixin<django_content_type, django_content_typeId>;
  createContent_type!: Sequelize.BelongsToCreateAssociationMixin<django_content_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof django_admin_log {
    return django_admin_log.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    action_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    object_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    object_repr: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    action_flag: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    change_message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'django_content_type',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'custom_user_user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'django_admin_log',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "django_admin_log_content_type_id_c4bce8eb",
        fields: [
          { name: "content_type_id" },
        ]
      },
      {
        name: "django_admin_log_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "django_admin_log_user_id_c564eba6",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
