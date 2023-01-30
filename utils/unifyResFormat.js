/**
 * 中间件 --- 统一响应 JSON 格式
 */
export default (req, res, next) => {
  res.setUnifyResFormat = (code, data, msg = "success") => {
    let res = {};
    if (code === 1) {
      res = {
        code,
        data,
        msg,
      };
    } else {
      res = {
        code,
        msg,
      };
    }
    return res;
  };
  next();
};
