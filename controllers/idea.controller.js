import db from "../modules/index.js";
const Idea = db.ideas;

// 根据ID 查询想法
export const findIdeaById = async (req, res) => {
  let data = await Idea.findOne({ where: { id: req.params.id } }).catch(
    (err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving ideas.",
      });
    }
  );
  if (data != null) {
    res.send(res.setUnifyResFormat(1, data));
  } else {
    res.send(res.setUnifyResFormat(0, data, "查询不到该用户"));
  }
};

// 查询所有想法
export const findAllIdea = (req, res) => {
  Idea.findAll({
    // attributes: { exclude: ["createdAt"] }, // 去除一些字段
    order: [["id", "DESC"]], // id 倒序排列
  }).then((data) => {
    res.send(res.setUnifyResFormat(1, data));
  });
};

// 增
export const createIdea = (req, res) => {
  let imageHeight = Math.round(Math.random() * (300 - 200) + 200);
  Idea.create({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    content: req.body.content,
    avatarUrl: req.body.avatarUrl,
    imageHeight,
  }).then((data) => {
    res.send(data);
  });
};
