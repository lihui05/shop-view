import request from "@/utils/request";

//销量趋势模块
export const getTrendList = () => {
  return request({
    url: "/trend",
    method: "GET",
  });
};

//商家销售统计模块
export const getSellerList = () => {
  return request({
    url: "/seller",
    method: "GET",
  });
};

//地区销售排行模块
export const getRankList = () => {
  return request({
    url: "/rank",
    method: "GET",
  });
};

//库存和销量分析模块
export const getStockList = () => {
  return request({
    url: "/stock",
    method: "GET",
  });
};

//热销商品占比模块
export const getHotList = () => {
  return request({
    url: "/hot",
    method: "GET",
  });
};

// 商家分布模块
export const getMapList = () => {
  return request({
    url: "/map",
    method: "GET",
  });
};
