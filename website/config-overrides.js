const {
  override,
  overrideDevServer,
  watchAll,
  addWebpackPlugin,
  addWebpackAlias,
  setWebpackPublicPath,
  addWebpackModuleRule,
  addWebpackResolve,
  // useBabelRc,
} = require("customize-cra");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
// const getCacheIdentifier = require("react-dev-utils/getCacheIdentifier");

module.exports = {
  webpack: override(
    // 防止react 冲突
    addWebpackAlias({
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    }),
    // useBabelRc(),
    addWebpackPlugin(
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        analyzerPort: 8889,
        openAnalyzer: false,
      })
    ),
    setWebpackPublicPath('/react-tmap'),
    addWebpackModuleRule({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules\/(?!@canmou)/,
      include: __dirname,
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          [
            "@babel/preset-react",
            {
              runtime: "automatic",
            },
          ],
        ],
        plugins: ["@babel/plugin-proposal-class-properties"],
      },
    }),
    addWebpackResolve({
      symlinks: false,
    })
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll()
  ),
};

// use: ["babel-loader"],

// exclude: (path) => {
//   console.log("path", path);
//   if (/@canmou/.test(path)) {
//     console.log(path, /node_modules/.test(path));
//   }
//   return /node_modules/.test(path);
// },
// exclude: /node_modules\/(?!other-module)/,
// include: __dirname  + '../',
// exclude: /node_modules\/(?!@canmou\/react-tmap-api-loader)/,
// exclude: /node_modules\/(?!@canmou)/,
// loader: require.resolve("babel-loader"),
