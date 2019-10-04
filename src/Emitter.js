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
    this.subscriptions[trigger].forEach(cb => cb())
  }

  on(trigger, cb) {
    if (!this.subscriptions[trigger]) {
      this.subscriptions[trigger] = []
    }

    this.subscriptions[trigger].push(cb)

    return () => {
      const index = this.subscriptions[trigger].indexOf(cb)
      if (index !== -1) this.subscriptions[trigger].splice(index, 1)
    }
  }
}