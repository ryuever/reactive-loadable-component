module.exports = {
  get RenderProvider() {
    return require('./src/Provider').default
  },

  get TriggeredComponent() {
    return require('./src/TriggeredComponent').default
  },

  get LoadableComponent() {
    return require('./src/LoadableComponent').default
  },

  get useNotify() {
    return require('./src/useNotify').default
  },
}