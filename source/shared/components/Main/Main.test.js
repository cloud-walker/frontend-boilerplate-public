import React from 'react'
import {shallow} from 'enzyme'
import Main from './index'

test('<Main/>', () => {
  expect(shallow(<Main/>)).toMatchSnapshot()
})
