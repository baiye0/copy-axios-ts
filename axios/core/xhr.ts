import {
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "../types";
import { parseHeaders } from "../helpers/headers";
import { createError } from "../helpers/errors";

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const {
      data = null,
      url,
      method = "get",
      headers,
      responseType,
      timeout,
    } = config;
    //1.创建一个XMLHttpRequest实例
    const request = new XMLHttpRequest();
    //2.配置请求参数
    request.open(method.toUpperCase(), url, true);
    Object.keys(headers).forEach((name) => {
      if (data === null && name.toLowerCase() === "content-type") {
        delete headers[name];
      }
      request.setRequestHeader(name, headers[name]);
    });
    if (responseType) {
      request.responseType = responseType;
    }
    //3.发送请求
    request.send(data);

    // 4.注册事件，拿到响应信息
    request.onreadystatechange = function handleLoad() {
      if (request.status === 0) {
        return;
      }
      if (request.readyState !== 4) {
        return;
      }
      const responseHeaders = parseHeaders(request.getAllResponseHeaders());
      const responseData =
        responseType && responseType !== "text"
          ? request.response
          : request.responseText;
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request,
      };
      handleResponse(response);
    };

    //4.1 网络错误
    request.onerror = function () {
      reject(createError("Network Error", config, null, request));
    };

    if (timeout) {
      request.timeout = timeout;
    }

    request.ontimeout = function () {
      reject(
        createError(
          `Timeout of ${timeout} ms exceeded`,
          config,
          "TIMEOUT",
          request
        )
      );
    };
    function handleResponse(response: AxiosResponse) {
      if (response.status >= 200 && response.status < 300) {
        resolve(response);
      } else {
        reject(
          createError(
            `Request failed with status code ${response.status}`,
            config,
            request.status,
            request,
            response
          )
        );
      }
    }
  });
}
