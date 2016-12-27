import asyncComponent from 'shared/hocs/asyncComponent'

export default asyncComponent(() =>
  System.import('./Styleguide').then(mod => mod.default)
)
