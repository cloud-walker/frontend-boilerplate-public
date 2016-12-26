import React from 'react'

const split = getComponent => React.createClass({
  getInitialState() {
    return {Component: null}
  },
  displayName: 'Split',
  componentWillMount() {
    if (!this.state.Component) {
      getComponent().then(Component => this.setState({Component}))
    }
  },
  render() {
    const {Component} = this.state

    return Component && <Component {...this.props}/>
  },
})

export default split
