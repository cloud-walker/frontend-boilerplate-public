import asyncComponent from 'shared/hocs/asyncComponent'

export default asyncComponent(() =>
  import('./Styleguide').then(mod => mod.default)
)
