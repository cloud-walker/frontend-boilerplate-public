import React, {PropTypes} from 'react'
import {compose, withState, withProps} from 'recompose'

const enhance = compose(
  withState('value', 'setValue', ''),
  withState('todos', 'updateTodos', ['foo', 'bar']),
  withProps(({todos, updateTodos, value, setValue}) => ({
    handleSubmit: e => (
      e.preventDefault(),
      updateTodos([...todos, value]),
      setValue('')
    ),
    handleChange: e => setValue(e.target.value),
  }))
)

const Component = ({todos, value, handleChange, handleSubmit}) =>
  <main>
    {todos.map((item, i) =>
      <div key={i}>{item}</div>
    )}

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
      <input type="submit" value="add"/>
    </form>
  </main>

Component.displayName = 'HomePage'
Component.propTypes = {
  todos: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default enhance(Component)
