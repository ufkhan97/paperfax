const path = require('path')
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const ReactRefreshTypeScript = require('react-refresh-typescript')

module.exports = (env, argv) => {
  const mode = argv.mode
  const isProduction = argv.mode === 'production'
  const devtool = isProduction ? false : 'inline-source-map'

  return {
    entry: './src/index.tsx',
    target: 'web',
    mode,
    devtool,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                getCustomTransformers: () => ({
                  before: [!isProduction && ReactRefreshTypeScript()].filter(Boolean)
                })
              }
            }
          ],
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.mjs', '.css'],
      fallback: {
        crypto: false,
        stream: false,
        assert: false,
        http: false,
        https: false,
        os: false
      },
      // alias: {
      //   process: "process/browser"
      // },
      plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
    },
    output: {
      path: path.resolve(__dirname, 'dist/'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
      !isProduction && new ReactRefreshWebpackPlugin(),
      new HtmlWebpackPlugin({ template: 'src/index.html' }),
      new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: 'process/browser.js',
      }),
    ].filter(Boolean),
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist')
      },
      compress: true
    }
  }
}
