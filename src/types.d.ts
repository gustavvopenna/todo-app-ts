export interface Todo {
  id: number
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoITitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Todo[]
