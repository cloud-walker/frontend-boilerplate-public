import React from 'react'
import {shallow} from 'enzyme'
import asyncComponent from './index'

test('asyncComponent', async () => {
  const lazyComponent = () => new Promise(resolve => {
    setTimeout(function () {
      resolve(props => <div {...props}>foo</div>)
    }, 50)
  })
  const AsyncComponent = asyncComponent(lazyComponent)
  const subject = shallow(<AsyncComponent/>)

  /**
   * At first the component should render nothing as the promise is not
   * yet resolved.
   */
  expect(subject).toMatchSnapshot()

  /**
   * Waiting the promiseComponent to resolve the subject should render
   * a different output.
   */
  await subject.instance().promiseComponent
  expect(subject).toMatchSnapshot()

  /**
   * Here we test the passing prop to the dynamic generated Component
   * functionality.
   */
  subject.setProps({
    foo: 'bar',
    baz: 'taz',
  })
  expect(subject).toMatchSnapshot()

  /**
   * This is to achieve 100% branch coverage.
   *
   * If the componentWillMount trigger more than once, the component
   * should not check the promiseComponent again!
   */
  subject.instance().componentWillMount()
})
