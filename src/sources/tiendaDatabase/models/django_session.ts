import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface django_sessionAttributes {
  session_key: string;
  session_data: string;
  expire_date: Date;
}

export type django_sessionPk = "session_key";
export type django_sessionId = django_session[django_sessionPk];
export type django_sessionCreationAttributes = django_sessionAttributes;

export class django_session extends Model<django_sessionAttributes, django_sessionCreationAttributes> implements django_sessionAttributes {
  session_key!: string;
  session_data!: string;
  expire_date!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof django_session {
    return django_session.init({
    session_key: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    session_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    expire_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'django_session',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "django_session_expire_date_a5c62663",
        fields: [
          { name: "expire_date" },
        ]
      },
      {
        name: "django_session_pkey",
        unique: true,
        fields: [
          { name: "session_key" },
        ]
      },
      {
        name: "django_session_session_key_c0390e0f_like",
        fields: [
          { name: "session_key" },
        ]
      },
    ]
  });
  }
}
