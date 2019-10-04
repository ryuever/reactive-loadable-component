import React, { useEffect, useState, useContext } from 'react'
import AsyncComponent from './AsyncComponent'
import Context from './Context'

const Component = props => {
  const { component, trigger, emit, async, ...rest } = props
  const emitter = useContext(Context)
  const [state, setState] = useState(0)

  useEffect(() => {
    if (!emitter.check[trigger]) {
      const remove = emitter.on(trigger, () => {
        setState(state + 1)
        remove()
      })
      return remove
    }
  }, [])

  if (!emitter.check(trigger)) return null
  if (!component) return props.children
  if (!async) return React.createElement(component, { ...props })
  return <AsyncComponent {...props} />
}

export default React.forwardRef((props, ref) => {
  return React.createElement(Component, {
    ...props,
    forwardRef: ref,
  })
})
