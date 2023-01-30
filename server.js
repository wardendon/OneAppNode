import express from "express";

import resextra from "./utils/unifyResFormat.js";
import ideaRouter from "./routes/ideas.js";
import path from "path";
import db from "./modules/index.js";
const __dirname = path.resolve(); // 当前路径的绝对路径

let app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.all("*", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(resextra);
app.use("/ideas", ideaRouter);
app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

// 启动server
let server = app.listen(3000, () => {
  // @ts-ignore
  let port = server.address().port;
  console.log(`应用实例，访问地址为 http://localhost:${port}`);
});

console.log("准备同步数据库");
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db");
  })
  .catch((err) => {
    console.log("Failed to sync db:" + err);
  });
