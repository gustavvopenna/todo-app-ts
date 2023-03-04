import React from 'react'

import { Todo } from './Todo'
import { type TodoId, type ListOfTodos } from '../types'

interface Props {
  todos: ListOfTodos
  onRemove: (id: TodoId) => void
  onToggle: (id: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onToggle, onRemove }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggle={() => onToggle({ id: todo.id }) }
            onRemove={() => onRemove({ id: todo.id }) }
          />
        </li>
      ))}
    </ul>
  )
}
