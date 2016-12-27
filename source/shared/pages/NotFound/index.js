import asyncComponent from 'shared/hocs/asyncComponent'

export default asyncComponent(() =>
  System.import('./NotFound').then(mod => mod.default)
)
