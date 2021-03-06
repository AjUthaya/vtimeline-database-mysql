"use strict";

const tableName = "user_login";

module.exports = {
  up: (sequelize, dataTypes) => {
    return sequelize.createTable(tableName, {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: dataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        defaultValue: dataTypes.INTEGER
      },
      user_id: {
        allowNull: false,
        type: dataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: {
            tableName: "users"
          },
          key: "id"
        }
      },
      login_id: {
        allowNull: false,
        type: dataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: {
            tableName: "logins"
          },
          key: "id"
        }
      },
      created_at: {
        allowNull: false,
        type: dataTypes.DATE,
        defaultValue: dataTypes.literal("CURRENT_TIMESTAMP")
      },
      updated_at: {
        allowNull: true,
        type: dataTypes.DATE
      },
      deleted_at: {
        allowNull: true,
        type: dataTypes.DATE
      }
    });
  },

  down: (sequelize, dataTypes) => {
    return sequelize.dropTable(tableName);
  }
};
