/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */

const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.ts'),
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"]
  },
  module: {
    rules: [

        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        loader: "ts-loader",

        test: /.tsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
      },
      {
        test: /.jsx?$/,
        include: [
          path.resolve(__dirname, 'test')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader',
        query: {
          presets: [
            ["@babel/env", {
              "targets": {
                "browsers": "last 2 chrome versions"
              }
            }]
          ]
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
    inline: true,
    host: 'localhost',
    port: 8080,
  }
};
