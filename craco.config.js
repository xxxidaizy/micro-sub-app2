const { name } = require("./package.json");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.library = `${name}-name`;
      webpackConfig.output.libraryTarget = "umd";
      webpackConfig.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
      return webpackConfig;
    },
  },
  devServer: (devServerConfig) => {
    devServerConfig.historyApiFallback = true;
    devServerConfig.hot = false;
    devServerConfig.open = false;
    devServerConfig.watchFiles = [];
    devServerConfig.liveReload = true;
    devServerConfig.headers = {
      "Access-Control-Allow-Origin": "*"
    };
    return devServerConfig;
  }
}