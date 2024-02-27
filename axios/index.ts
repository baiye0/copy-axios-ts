import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from "./types";
import xhr from "./xhr";
import { buildURL } from "./helpers/url";
import { transformRequest, transformResponse } from "./helpers/data";
import { processHeaders } from "./helpers/headers";

function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config);
  return xhr(config).then((res) => {
    return transformResponseData(res);
  });
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data);
  return res;
}

//处理参数
function processConfig(config: AxiosRequestConfig) {
  config.url = transformURL(config);
  config.headers = transformHeaders(config);
  config.data = transformRequestData(config);
}

function transformURL(config: AxiosRequestConfig) {
  const { url, params } = config;
  return buildURL(url, params);
}

function transformRequestData(config: AxiosRequestConfig): any {
  const { data } = config;
  return transformRequest(data);
}

function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config;
  return processHeaders(headers, data);
}

export default axios;
