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

  const handleRemove = ({ id }: TodoId): void => {
    console.log('here')
    const newTodos = todos.filter(todo => todo.id !== id)
    console.log({ newTodos })
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos todos={todos} onRemove={handleRemove} />
    </div>
  )
}

export default App
