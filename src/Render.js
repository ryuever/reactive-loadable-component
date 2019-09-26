import React from 'react'
import AsyncComponent from './AsyncComponent'

const Render = props => {
  const { renderComponent } = props
  const Component = AsyncComponent(renderComponent)




  return null
}

Render.displayName = 'Render'

export default Render
