import { Router } from "express";
import { readFile } from "fs";
import path from "path";

let ideaRouter = Router();
const __dirname = path.resolve();

/**
 * api
 */
// 获取想法列表
ideaRouter.get("/list", (req, res) => {
  readFile(__dirname + "/data/ideas.json", "utf-8", (err, data) => {
    data = JSON.parse(data);
    // @ts-ignore
    res.send(res.setUnifyResFormat(1, data["list"]));
  });
});

// 想法详情
ideaRouter.get("/:id", (req, res) => {
  // console.log("__dirname:" + __dirname);
  readFile(__dirname + "/data/ideas.json", "utf-8", (err, data) => {
    data = JSON.parse(data);
    let idea = data["list"][req.params.id];
    // @ts-ignore
    res.send(res.setUnifyResFormat(1, idea, "请求成功"));
  });
});

//导出该路由
export default ideaRouter;
