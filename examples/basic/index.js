import React from 'react'
import ReactDOM from 'react-dom'
import { RenderProvider, ObservableComponent } from 'reactive-loadable-component'
import B from './B'

const ObservableA = () => require('./A').default

const Basic = () => {
  return (
    <RenderProvider>
      <ObservableComponent
        component={ObservableA}
        trigger="b-loaded"
        async
      />
      <B />
    </RenderProvider>
  )
}

ReactDOM.render(<Basic />, document.getElementById('app'))
