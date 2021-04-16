import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import webpack from 'webpack'

export const dist = path.resolve(__dirname, 'dist')
export const context = path.resolve(process.cwd(), '../')

export const config: webpack.Configuration = {
  output: {
    filename: '[name].bundle.[contenthash].js',
    path: dist,
  },
  entry: {
    index: path.resolve(__dirname, './src/index.ts'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
        resolve: { mainFields: ['es2015', 'module', 'main'] },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      chunks: ['index'],
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({ chunkFilename: '[name].bundle.[contenthash].css' }),
    new ForkTsCheckerWebpackPlugin({
      typescript: { configFile: path.resolve(__dirname, 'tsconfig.json') },
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
