import request from "@/utils/service.js";

export const loginApi = (data) => {
  return request({
    url: "/example/user/login",
    method: "post",
    data,
  });
};

export const logoutApi = (data) => {
  return request({
    url: "/example/user/logout",
    method: "post",
  });
};
