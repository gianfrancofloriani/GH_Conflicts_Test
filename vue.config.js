const version = require('./package.json').version

module.exports = {
  publicPath: './',
  filenameHashing: true,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: {
    extract: {
      filename: `assets/css/[name].${version}.css`,
      chunkFilename: `assets/css/[name].${version}.css`
    }
  },
  chainWebpack: config => {
    config.output
      .filename(`assets/js/[name].${version}.js`)
      .chunkFilename(`assets/js/[name].${version}.js`)
  },

  configureWebpack: {
    devtool: 'source-map'
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
