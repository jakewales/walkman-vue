// import sass global variable
// https://github.com/vuejs/vue-cli/blob/dev/docs/guide/css.md#passing-options-to-pre-processor-loaders
module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/styles/global-variable.scss";`
      }
    }
  },
  devServer: {
    proxy: 'http://localhost:3000'
  }
}
