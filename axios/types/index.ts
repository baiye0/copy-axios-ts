//config 类型
export interface AxiosRequestConfig {
  url: string;
  method?: string;
  data?: any;
  headers?: any;
  params?: any; //get,head 请求用于拼接url中
  responseType?: XMLHttpRequestResponseType;
}

export interface AxiosResponse {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
  request: any;
}

export interface AxiosPromise extends Promise<AxiosResponse> {}
export type Method =
  | "get"
  | "GET"
  | "delete"
  | "Delete"
  | "head"
  | "HEAD"
  | "options"
  | "OPTIONS"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH";