import React, { useEffect, useState, useContext, useRef } from 'react'
import AsyncComponent from './AsyncComponent'
import Context from './Context'

const Component = props => {
  const { component, trigger, emit, async, ...rest } = props
  const emitter = useContext(Context)
  const [state, setState] = useState(false)
  const pending = useRef({})

  useEffect(() => {
    const next = [].concat(trigger)
    if (Array.isArray(next)) {
      next.forEach(dep => {
        pending.current[dep] = false
        const remove = emitter.on(dep, () => {
          pending.current[dep] = true
          remove()

          if (next.every(dep => pending.current[dep])) {
            setState(true)
          }
        })
      })
    }
  }, [])

  if (!state) return null

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
