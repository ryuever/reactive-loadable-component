import React from 'react'

export default props => {
  console.log('props : ')

  React.Children.map(props.children, child => console.log('child  :', child, child.type.displayName))

  return (
    <div>
      ReactRenderRouter
      {props.children}
    </div>
  )
}