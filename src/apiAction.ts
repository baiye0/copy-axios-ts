import axios from "../axios/index";

export async function getBase() {
  // axios({
  //   method: "get",
  //   url: "/api/base/get",
  //   params: {
  //     a: 1,
  //     b: 2,
  //   },
  // });

  const res = await axios({
    method: "post",
    url: "/api/base/post",
    headers: {
      "content-type": "application/json; charset=UTF-8",
      Accept: "application/json,text/plain,*/*",
    },
    data: {
      a: 1,
      b: 2,
    },
  });
  console.log(res);
  // // 参数值为对象
  // axios({
  //   method: "get",
  //   url: "/api/base/get",
  //   params: {
  //     foo: {
  //       bar: "baz",
  //     },
  //   },
  // });

  // // 参数值为 Date 类型
  // const date = new Date();
  // axios({
  //   method: "get",
  //   url: "/api/base/get",
  //   params: {
  //     date,
  //   },
  // });

  // // 参数值包含特殊字符
  // axios({
  //   method: "get",
  //   url: "/api/base/get",
  //   params: {
  //     foo: "@:$, ",
  //   },
  // });

  // // 参数值包含null或`undefined`
  // axios({
  //   method: "get",
  //   url: "/api/base/get",
  //   params: {
  //     foo: "bar",
  //     baz: null,
  //   },
  // });

  // // url 中存在哈希#标记
  // axios({
  //   method: "get",
  //   url: "/api/base/get#hash?bar=baz",
  //   params: {
  //     foo: "bar",
  //   },
  // });

  // // url 中已存在的参数
  // axios({
  //   method: "get",
  //   url: "/api/base/get?foo=bar",
  //   params: {
  //     bar: "baz",
  //   },
  // });
}
