const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/js/main.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          'file-loader'
        ]
      },
    //   {
    //     test: /\.(png|jpg|jpeg|gif)$/,
    //     exclude: /node_module/,
    //     use: {
    //       loader: "url-loader",
    //       options: {
    //         name: "assets/[name].[hash].[ext]",
    //         fallback: "file-loader",
    //       },
    //     },
    //  },      
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: './src/index.html'
    }),
    new CopyPlugin({
      patterns: [{
        from: './src/assets'
      }]
    })
  ],
  devServer: {
    host: 'localhost'
  }
}