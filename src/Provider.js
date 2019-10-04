import React, { useMemo } from 'react'
import Context from './Context'
import Emitter from './Emitter'

export default props => {
  const { onChange, children } = props
  const value = useMemo(() => {
    return new Emitter(onChange)
  }, [])

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}