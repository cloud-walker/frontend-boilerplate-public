import React from 'react'
import {shallow} from 'enzyme'
import FormNewTodo from './index'

test('it should render properly', () => {
  const wrapper = shallow(<FormNewTodo value="prova"/>)

  expect(wrapper).toMatchSnapshot()
})
