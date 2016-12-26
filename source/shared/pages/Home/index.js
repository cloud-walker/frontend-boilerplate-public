import asyncComponent from 'shared/hocs/asyncComponent'

export default asyncComponent(() =>
  import('./Home').then(mod => mod.default)
)
