import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  server: {
    open: false,
    port: 5137,
    https: false,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true, //是否跨域
        // rewrite: (path) => path.replace(/^\/mis/, ""), //因为后端接口有mis前缀，所以不需要替换
        // ws: true,                       //是否代理 websockets
        // secure: true, //是否https接口
      },
    },
  },
});
