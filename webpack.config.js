import path from 'path'
import {fileURLToPath} from 'url';

export default {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'dist')
  },
  module: {
    rules: []
  }
}
