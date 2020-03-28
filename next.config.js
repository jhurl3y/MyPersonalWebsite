const webpack = require("webpack");
const withCSS = require("@zeit/next-css");
require("dotenv").config();

module.exports = withCSS({
  assetPrefix: "./",
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  },
  webpack: config => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      console.log(acc);
      return acc;
    }, {});

    config.node = {
      fs: "empty"
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    config.plugins.push(new webpack.DefinePlugin(env));

    return config;
  }
});
