import axios from "axios";

// axios.create 是创建axios的实例
const server= axios.create({
    baseURL: 'http://127.0.0.1:8080/api/',
    timeout: 1000
  });

// 请求的拦截器
server.interceptors.request.use(
    // 每次请求都需要经过这里
    function (config) {
    // Do something before request is sent
    return config;
    }, 
    function (error) {
    // Do something with request error
    return Promise.reject(error);
});
// 响应的拦截器
server.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
export default server;