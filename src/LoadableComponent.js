import React, { useEffect, useState, useRef } from 'react'
import AsyncComponent from './AsyncComponent'

const Component = props => {
  const { component, loadable, async } = props
  const loaded = useRef(0)
  const [state, setState] = useState(false)

  useEffect(() => {
    if (loadable) {
      loaded.current += 1

      if (loaded.current === 1) {
        setState(true)
      }
    }
  }, [loadable])

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
