const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports={
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: 'my-bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: [
                // "style-loader",
            MiniCssExtractPlugin.loader,
             "css-loader",
             "sass-loader"],
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use:  ["babel-loader"],
          },
          // 
          {
            test: /\.(png|jpg|svg)$/i,
            exclude: /node_modules/,
            use: [
              {
                loader: 'file-loader',
                options:{
                  name:'[path][name].[ext]',
                  outputPath:'images/',
                  publicPath:'images/'
                }
              },
            ],
          },
          // 
        ],
      },
      plugins: [new HtmlWebpackPlugin({template:'src/index.html'}),
      new MiniCssExtractPlugin({filename: "hello.css"})],
      
    devServer:{
        port:8080,
        // stats:'errors-only',

    }
};
