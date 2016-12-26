import React from 'react'

export default getComponent => React.createClass({
  displayName: 'AsyncComponent',
  getInitialState() {
    return {Component: null}
  },
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
