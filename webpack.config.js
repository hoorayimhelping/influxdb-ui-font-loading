import path from 'path'
import {fileURLToPath} from 'url';

import sass from 'sass'

const currentDirectory = path.dirname(fileURLToPath(import.meta.url))

export default {
  entry: './src/index.tsx',
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(currentDirectory, 'dist')
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
    }]
  }
}
