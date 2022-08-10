const path = require('path');

module.exports = {
  mode: 'development',
  entry: { main: './index.tsx' },
  devtool: false,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    symlinks: false,
  },
  optimization: {
    usedExports: true,
    sideEffects: true,
    innerGraph: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                compact: true,
              },
            },
          ],
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build')
  }
}
