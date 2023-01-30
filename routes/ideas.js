import { Router } from "express";
import { readFile } from "fs";
import path from "path";
import {
  createIdea,
  findAllIdea,
  findIdeaById,
} from "../controllers/idea.controller.js";

let ideaRouter = Router();
const __dirname = path.resolve();

/**
 * api
 * 路由前缀  /ideas
 */
// 获取想法列表
ideaRouter.get("/list", findAllIdea);

// 想法详情
ideaRouter.get("/find/:id", findIdeaById);
ideaRouter.post("/add", createIdea);

//导出该路由
export default ideaRouter;
