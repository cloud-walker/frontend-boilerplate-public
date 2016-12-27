import asyncComponent from 'shared/hocs/asyncComponent'

export default asyncComponent(() =>
  System.import('./Home').then(mod => mod.default)
)
