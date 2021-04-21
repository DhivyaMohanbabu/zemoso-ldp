const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',

  output: {
    path: path.resolve(__dirname, 'public'),
    libraryExport: 'default',
    filename: 'main.js',
    publicPath: '/',
  },
  target: 'web',
  devServer: {
    port: '3000',
    contentBase: ['./public'],
    inline: true,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(png|jpg)$/,
        use: ['url-loader'],
      },
    ],
  },
};
