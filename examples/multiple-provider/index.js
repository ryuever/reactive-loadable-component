import React from 'react'
import ReactDOM from 'react-dom'
import { RenderProvider, ObservableComponent } from 'reactive-loadable-component'
import B from './B'
import C from './C'

const ObservableA = () => require('./A').default
const ObservableD = () => require('./D').default

const Basic = () => {
  const changeHandlerA = (oldStatus, newChange) => {
    console.log('A : ', oldStatus, newChange)
  }

  const changeHandlerD = (oldStatus, newChange) => {
    console.log('D : ', oldStatus, newChange)
  }

  return (
    <div>
      <RenderProvider onChange={changeHandlerA}>
        <ObservableComponent component={ObservableA} trigger="b-loaded" async />
        <B />
      </RenderProvider>
      <RenderProvider onChange={changeHandlerD}>
        <ObservableComponent component={ObservableD} trigger="c-loaded" async />
        <C />
      </RenderProvider>
    </div>
  )
}

ReactDOM.render(<Basic />, document.getElementById('app'))
