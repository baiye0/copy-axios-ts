import axios from "../axios/axios";

export async function getBase() {
  console.log(axios);
  axios("/api/expandInterface/post", {
    method: "post",
    data: {
      msg: "hello",
    },
  });

  axios.request({
    url: "/api/expandInterface/post",
    method: "post",
    data: {
      msg: "hello",
    },
  });

  axios.get("/api/expandInterface/get");

  axios.options("/api/expandInterface/options");

  axios.delete("/api/expandInterface/delete");

  axios.head("/api/expandInterface/head");

  axios.post("/api/expandInterface/post", { msg: "post" });

  axios.put("/api/expandInterface/put", { msg: "put" });

  axios.patch("/api/expandInterface/patch", { msg: "patch" });
}
