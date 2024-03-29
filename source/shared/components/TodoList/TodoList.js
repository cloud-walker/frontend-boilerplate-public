import React, {PropTypes} from 'react'

const Component = ({todos}) => !!todos.length &&
  <ul>
    {todos.map((todo, i) =>
      <li key={i}>{todo}</li>
    )}
  </ul>

Component.displayName = 'TodoList'
Component.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default Component
