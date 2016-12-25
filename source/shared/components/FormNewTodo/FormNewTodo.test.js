import React from 'react'
import {shallow} from 'enzyme'
import FormNewTodo from './index'

test('<FormNewTodo/>', () => {
  const preventDefault = jest.fn()
  const addTodo = jest.fn()
  const subject = shallow(
    <FormNewTodo
      addTodo={addTodo}
    />
  )

  subject.dive()
    .find('[type="text"]')
    .simulate('change', {target: {value: 'woot'}})

  subject.dive()
    .simulate('submit', {preventDefault})

  expect(preventDefault).toHaveBeenCalled()
  expect(addTodo).toHaveBeenCalled()
})
