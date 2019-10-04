import React, { useEffect, useState } from 'react'

export default props => {
  const { component: getComponent } = props
  const [state, setState] = useState({ LoadedComponent: null })
  useEffect(() => {
    Promise.resolve(getComponent()).then(LoadedComponent => {
      // `setState(LoadedComponent)` will cause
      // `TypeError: Cannot call a class as a function`;
      // set `LoadedComponent` as object value
      setState({ LoadedComponent })
    })
  }, [])

  if (!state.LoadedComponent) return null

  return <state.LoadedComponent {...props} />
}

// import React, { Component } from 'react'

// export default function asyncComponent(getComponent) {
//   class AsyncComponent extends Component {
//     constructor(props) {
//       super(props)

//       this.state = { ImportedComponent: null }
//     }

//     componentWillMount() {
//       const { component } = this.state

//       if (!component) {
//         getComponent().then(ImportedComponent => {
//           console.log('a : ', ImportedComponent)
//           this.setState({
//             ImportedComponent,
//           })
//         })
//       }
//     }

//     render() {
//       const { ImportedComponent } = this.state

//       if (ImportedComponent) {
//         return (
//           <ImportedComponent
//             {...this.props}
//             setDomRef={this.setDomRef}
//           />
//         )
//       }

//       return null
//     }
//   }

//   return AsyncComponent
// }
