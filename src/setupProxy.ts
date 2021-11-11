import { createProxyMiddleware } from "http-proxy-middleware";
const fs = require("fs");

let packageJson = JSON.parse(fs.readFileSync(__dirname + "/../package.json"));

module.exports = function (app: any) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: packageJson.proxy,
      changeOrigin: true,
    })
  );
};
