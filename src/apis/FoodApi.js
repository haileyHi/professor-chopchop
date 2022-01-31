import axios from "axios";

// 서버 주소
const baseUrl = "http://localhost:9090";

// 음식 순위 가져오기
const requestFoodRank = async function () {
  const response = await axios({
    method: "GET",
    url: baseUrl + "/menu/rank",
  });
  return response.data.data;
};

// eslint-disable-next-line no-unused-vars
const requestFoodCategory = async function (data, callback, errorCallback) {
  const response = await axios({
    method: "GET",
    url: baseUrl + `/menu/category/${data}`,
  });
  return response.data.data;
};

const FoodApi = {
  requestFoodRank: (data, callback, errorCallback) =>
    requestFoodRank(data, callback, errorCallback),
  requestFoodCategory: (data, callback, errorCallback) =>
    requestFoodCategory(data, callback, errorCallback),
};

export default FoodApi;
