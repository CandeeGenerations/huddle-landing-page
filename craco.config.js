const path = require('path')

const ENV = process.env.NODE_ENV

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins[
        webpackConfig.plugins.length - 1
      ].tsconfig = path.resolve(__dirname, 'tsconfig.cgen.json')

      return webpackConfig
    },
    alias: {
      '@app': path.resolve(__dirname, 'src/'),
      Assets: path.resolve(__dirname, './src/assets'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@app(.*)$': '<rootDir>/src$1',
      },
    },
  },
}
