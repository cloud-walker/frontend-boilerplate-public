import React, {PropTypes} from 'react'
import {compose, withState, withProps} from 'recompose'

/**
* Form to create new todos.
*/

const enhance = compose(
  withState('value', 'setValue', ''),
  withProps(({value, setValue, addTodo}) => ({
    handleSubmit: e => (
      e.preventDefault(),
      addTodo(value),
      setValue('')
    ),
    handleChange: e => setValue(e.target.value),
  }))
)

const Component = ({value, handleSubmit, handleChange}) =>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={value}
      onChange={handleChange}
    />
    <input type="submit" value="add"/>
  </form>

Component.displayName = 'FormNewTodo'
Component.propTypes = {
  value: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default enhance(Component)
