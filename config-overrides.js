/* eslint-disable no-param-reassign */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ProvidePlugin } = require("webpack");

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    os: require.resolve("os-browserify/browser"),
    assert: require.resolve("assert"),
    url: require.resolve("url"),
    path: require.resolve("path-browserify"),
    buffer: require.resolve("buffer"),
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);
  config.module.rules.push({
    test: /\.m?js/,
    resolve: {
      fullySpecified: false,
    },
  });
  return config;
};
