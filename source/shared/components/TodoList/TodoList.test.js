import React from 'react'
import {shallow} from 'enzyme'
import TodoList from './index'

test('<TodoList/> empty', () => {
  expect(shallow(<TodoList todos={[]}/>)).toMatchSnapshot()
})

test('<TodoList/> with some todos', () => {
  const wrapper = shallow(<TodoList todos={[
    'Clean the Kitchen',
    'Go out for a walk',
  ]}/>)

  expect(wrapper).toMatchSnapshot()
})
