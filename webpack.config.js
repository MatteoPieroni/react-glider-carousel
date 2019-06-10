const path = require('path');

module.exports = {
  entry: './src/GliderComponent.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'commonjs2',
  },
  externals: {
    react: 'commonjs react',
  },
};
