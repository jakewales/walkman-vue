import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

/*
  TODO
  处理请求
    请求类型，请求参数，token处理
  处理响应
    http code处理，响应code处理，提示，响应主体返回
*/

const fetch = (requestUrl: string, methods: string, datas: object | Array<object>, requestConfig?: object) => {
  const instance: AxiosInstance = axios.create({
    baseURL: '',
    timeout: 100000,
    ...requestConfig,
  } as AxiosRequestConfig);
  // 拦截请求
  instance.interceptors.request.use((config: AxiosRequestConfig) => {
    const token: string | null = sessionStorage.getItem('Token');
    if (token) {
      if (!!config.headers) {
        config.headers = {
          Authorization: `Bearer ${token}`,
        };
      } else {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    if (!config.headers.hasOwnProperty('Content-Type')) {
      config.headers = {
        'Content-Type': 'application/json',
      };
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  // 拦截响应
  instance.interceptors.response.use((response) => {
    if (response.data.statusCode !== 1) {
      console.log(response.data.errorMessage);
    }
    return response;
  }, (error) => {
    const status: number = error.response.status;
    switch (status) {
      case 403 :
        console.log('未授权');
        break;
      case 404 :
        console.log('未找到页面');
        break;
      case 500 :
        console.log('服务器错误');
        break;
      default :
        console.log('其他错误');
    }
    return Promise.reject(error);
  });
  switch (methods) {
    case 'GET':
      return instance.get(requestUrl, {params: datas});
    case 'POST':
      return instance.post(requestUrl, datas);
    default:
      return instance.get(requestUrl, {params: datas});
  }
};

export default fetch;
