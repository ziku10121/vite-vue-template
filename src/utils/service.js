import axios from "axios";

const serviceInstance = axios.create({
  baseURL: "",
  timeout: 10000, //逾期時間
});

serviceInstance.interceptors.request.use((config) => {
  const isToken = (config.headers || {}).isToken === true;
  // if (isToken) {
  //   config.headers['Authorization'] = 'Bearer ' + getToken()
  // }

  return config;
});

serviceInstance.interceptors.response.use(
  (response) => {
    const { code, isSUccess } = response.data;

    if (
      response.headers["content-type"] === "application/octet-stream" ||
      response.headers["content-type"] ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      return Promise.resolve({
        type: response.headers["content-type"],
        disposition: response.headers["content-disposition"],
        data: response.data,
      });
    } else {
      return response.data;
    }
  },
  (error) => {
    console.warn(error);

    let { message, response } = error;

    return Promise.reject(response);
  }
);

export default serviceInstance;
