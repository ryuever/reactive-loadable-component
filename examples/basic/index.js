import React from 'react'
import ReactDOM from 'react-dom'
import { ReactRenderRouter, Render } from 'react-render-router'

const Basic = () => {
  return (
    <ReactRenderRouter>
      <Render />
    </ReactRenderRouter>
  )
}

ReactDOM.render(<Basic />, document.getElementById('app'))
