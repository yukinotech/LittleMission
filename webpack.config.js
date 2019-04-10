const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//解析公共css
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/indexPage/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json",".css"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-typescript",
                {
                  isTSX: true,
                  allExtensions:true
                }
              ],
              // "@babel/preset-env",
              '@babel/preset-react'
            ],
            plugins:['@babel/plugin-proposal-object-rest-spread',"@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src/indexPage"),
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader","postcss-loader"]
        })
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "dist/index.html"),
      template: "./src/indexPage/index.html",
      inject: false
    }),
    new ExtractTextPlugin("css/index.css")
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 80,
    host: "0.0.0.0"
  }
};
