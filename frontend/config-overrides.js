const webpack = require("webpack");

module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }

  if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.BUCKET_NAME': JSON.stringify(process.env.BUCKET_NAME),
        'process.env.AWS_ID': JSON.stringify(process.env.AWS_ID),
        'process.env.AWS_SECRET': JSON.stringify(process.env.AWS_SECRET),
      })
    );
  }

  return config;
}