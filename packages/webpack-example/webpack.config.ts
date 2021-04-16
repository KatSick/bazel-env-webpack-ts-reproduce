import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import merge from 'webpack-merge'
import { config } from './webpack.config.common'

export default merge(config, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin() as any],
  },
})
