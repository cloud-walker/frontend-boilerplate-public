import React from 'react'

/**
 * This higher order component gets a function that produce
 * the promise from the dynamic import, and use it to create
 * a meta component holding the state of the promise.
 * Until the promise is resolved the component will render
 * nothing.
 *
 * @param  {function} getComponent
 * @return {Component}
 */
export default getComponent => React.createClass({
  displayName: 'AsyncComponent',
  getInitialState() {
    return {Component: null}
  },
  componentWillMount() {
    if (!this.state.Component) {
      this.promiseComponent = getComponent().then(Component => {
        this.setState({Component})
        return Component
      })
    }
  },
  render() {
    const {Component} = this.state
    return Component && <Component {...this.props}/>
  },
})
