import path from 'path'
import {fileURLToPath} from 'url'
import sass from 'sass'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const currentDirectory = path.dirname(fileURLToPath(import.meta.url))

const STATIC_DIRECTORY = './static/'

export default {
  entry: './src/index.tsx',
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  output: {
    filename: `${STATIC_DIRECTORY}[contenthash:10].js`,
    path: path.resolve(currentDirectory, 'dist'),
    // clean: true
  },
  resolve: {
    alias: {
      src: path.resolve(currentDirectory, 'src'),
      assets: path.resolve(currentDirectory, 'assets'),
      react: path.resolve(currentDirectory, 'node_modules/react')
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      ]
    },
    {
      test: /\.s?css$/i,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: sass
          }
        }
      ]
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: `${STATIC_DIRECTORY}[contenthash:10].[ext]`
          }
        }
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: `${STATIC_DIRECTORY}[contenthash:10].[ext]`,
          },
        },
      ],
    }
  ]},
  plugins: [new HtmlWebpackPlugin({
    inject: false,
    templateContent: ({htmlWebpackPlugin}) => `
      <html>
        <head>
          <title>bucky bucky bucky</title>
          ${htmlWebpackPlugin.tags.headTags}
        </head>
        <body>
          <main id="content" />
          ${htmlWebpackPlugin.tags.bodyTags}
        </body>
      </html>
    `
  })]
}
