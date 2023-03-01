import { Todos } from './components/Todos'

const mockTodos = [
  { id: 1, title: 'Ver tutorial de React con Typescript', completed: true },
  { id: 1, title: 'Estudiar para Cells', completed: false },
  { id: 1, title: 'Ver a Jorge', completed: false }
]

function App (): JSX.Element {
  return (
    <div className='todoapp'>
      <Todos todos={mockTodos} />
    </div>
  )
}

export default App
