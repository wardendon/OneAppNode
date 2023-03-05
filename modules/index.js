// import { HOST, USER, PASSWORD, DB, dialect, pool } from "../config/db.config";
import { Sequelize } from "sequelize";
import ideaModel from "./idea.model.js";
// const sequelize = new Sequelize(DB, USER, PASSWORD, {
//   host: HOST,
//   dialect,
//   pool,
// });
const sequelize = new Sequelize("db_short_video", "root", "mysql@1212", {
  host: "47.113.222.32",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.ideas = ideaModel(sequelize);

export default db;
