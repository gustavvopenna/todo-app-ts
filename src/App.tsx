import { useState } from 'react'

import { Todos } from './components/Todos'
import { type TodoId, type ListOfTodos } from './types'

const mockTodos = [
  { id: 1, title: 'Ver tutorial de React con Typescript', completed: true },
  { id: 2, title: 'Estudiar para Cells', completed: false },
  { id: 3, title: 'Ver a Jorge', completed: false }
]

function App (): JSX.Element {
  const [todos, setTodos] = useState<ListOfTodos>(mockTodos)

  const handleToggle = ({ id }: TodoId): void => {
    const newTodos = todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo
    })
    setTodos(newTodos)
  }

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
    </div>
  )
}

export default App
