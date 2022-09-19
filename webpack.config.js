import path from 'path'
import {fileURLToPath} from 'url';

const currentDirectory = path.dirname(fileURLToPath(import.meta.url))

export default {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(currentDirectory, 'dist')
  },
  resolve: {
    alias: {
      src: path.resolve(currentDirectory, 'src'),
      assets: path.resolve(currentDirectory, 'assets'),
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
    }]
  }
}
