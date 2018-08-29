const path = require('path');

module.exports = {
  mode:  'production',
  entry: {
    simplex3d: './demo/simplex3d.js',
  },
  output: {
    path:     path.resolve(__dirname, 'demo'),
    filename: '[name].demo.js',
  },
  module: {
    rules: [
      {
        test:    /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use:     {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
