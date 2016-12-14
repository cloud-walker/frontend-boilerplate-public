import React, {PropTypes} from 'react'
import {compose, withState, withProps} from 'recompose'
import FormNewTodo from 'shared/components/FormNewTodo'
import TodoList from 'shared/components/TodoList'

const enhance = compose(
  withState('todos', 'updateTodos', ['foo', 'bar']),
  withProps(({todos, updateTodos}) => ({
    addTodo: todo => updateTodos([...todos, todo]),
  }))
)

const Component = ({todos, addTodo}) =>
  <main>
    <TodoList todos={todos}/>
    <FormNewTodo addTodo={addTodo}/>
  </main>

Component.displayName = 'HomePage'
Component.propTypes = {
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
}

export default enhance(Component)
