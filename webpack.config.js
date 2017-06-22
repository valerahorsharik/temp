import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin'
export default {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json','css','scss','sass']
  },
  devtool: 'eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  entry: [
    // must be first entry to properly set public path
    './front/application/Main.jsx',
  ],
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: path.resolve(__dirname, 'front/build'), // Note: Physical files are only output by the production build task npm run build.
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['stage-0', ['es2015', {modules: false}], ['react']]
          }
        }
      },
      // {test: /(\.css|\.scss|\.sass)$/, loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader?sourceMap']}
      {test: /\.eot$/, loader: 'file-loader'},
      {test: /\.woff(2)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
      {test: /\.[ot]tf$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("app.css")
  ],

};
