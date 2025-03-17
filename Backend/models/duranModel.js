import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const DuranModel = sequelize.define(
  "Duran",
  {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "Pending",
      validate: {
        isIn: [["Pending", "Completed"]],
      },
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "DuranTodoTasks",
  }
);

export default DuranModel;
