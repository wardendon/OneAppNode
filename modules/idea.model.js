import { Sequelize, DataTypes } from "sequelize";
export default (sequelize) => {
  const Idea = sequelize.define("idea", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    avatarUrl: {
      type: DataTypes.STRING,
    },
    likeNum: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    isLiked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    imageHeight: {
      type: DataTypes.DOUBLE,
    },
  });
  return Idea;
};
