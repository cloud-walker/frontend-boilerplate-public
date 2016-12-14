import React from 'react'
import {shallow} from 'enzyme'
import TodoList from './index'

test('<TodoList/>', () => {
  expect(shallow(<TodoList todos={[]}/>)).toMatchSnapshot()
})
