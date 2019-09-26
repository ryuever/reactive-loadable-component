import React, { Component } from 'react'

export default function asyncComponent(getComponent) {
  class AsyncComponent extends Component {
    static Component = null;

    state = { ImportedComponent: null };

    componentWillMount() {
      const { component } = this.state

      if (!component) {
        getComponent().then(ImportedComponent => {
          this.setState({
            ImportedComponent,
          })
        })
      }
    }

    setDomRef = ref => { this.domRef = ref }

    getDomRef = () => this.domRef

    render() {
      const { ImportedComponent } = this.state

      if (ImportedComponent) {
        return (
          <ImportedComponent
            {...this.props}
            setDomRef={this.setDomRef}
          />
        )
      }

      return null
    }
  }

  return AsyncComponent
}
