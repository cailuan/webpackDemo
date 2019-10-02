const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode:'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'clatestlibrary.js',
    library:"clatestlibrary",
    libraryTarget:"umd"
  },
  externals:{
    lodash:{
        commonjs: 'lodash',
        amd: 'lodash',
        commonjs2: 'lodash',
        root: '_'
    }
  }
};