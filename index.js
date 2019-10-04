module.exports = {
  get RenderProvider() {
    return require('./src/Provider').default
  },

  get ObservableComponent() {
    return require('./src').default
  },

  get useNotify() {
    return require('./src/useNotify').default
  },
}