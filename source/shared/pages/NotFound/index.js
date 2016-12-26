import asyncComponent from 'shared/hocs/asyncComponent'

export default asyncComponent(() =>
  import('./NotFound').then(mod => mod.default)
)
