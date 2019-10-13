let id = 0

export default class Emitter {
  constructor(onChange) {
    this.onChange = onChange
    this.subscriptions = {}
    this.status = {}
    this.id = id++
  }

  check(trigger) {
    return this.status[trigger]
  }

  fire(trigger) {
    if (!this.subscriptions[trigger]) return
    if (!this.status[trigger] && typeof this.onChange === 'function') {
      this.onChange({...this.status}, {[trigger]: true})
    }

    this.status[trigger] = true

    const keys = Object.keys(this.subscriptions[trigger])

    keys.forEach(key => this.subscriptions[trigger][key]())
  }

  on(trigger, cb) {
    if (!this.subscriptions[trigger]) {
      this.subscriptions[trigger] = {}
    }

    const key = this.id++

    this.subscriptions[trigger][key] = cb

    return () => {
      delete this.subscriptions[trigger][key]
    }
  }
}