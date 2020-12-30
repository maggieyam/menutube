const webpack = require("webpack");

module.exports = function override(config, env) {
  console.log("env is " + process.env.NODE_ENV);
  if (!config.plugins) {
    config.plugins = [];
  }

  if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.BUCKET_NAME': JSON.stringify(process.env.BUCKET_NAME),
        'process.env.ID': JSON.stringify(process.env.AWS_ID),
        'process.env.SECRET': JSON.stringify(process.env.AWS_SECRET),
      })
    );
  }

  return config;
}