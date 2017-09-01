const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'app/index.html' })

module.exports = {
  devtool: 'source-map',
  entry: __dirname + "/app/app.js",
  output: {
    path: __dirname + "/public/build",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3333
  },
  plugins: [HTMLWebpackPluginConfig]
}