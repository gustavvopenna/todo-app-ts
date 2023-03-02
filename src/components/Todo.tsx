import { type Todo as ITodo, type TodoId } from '../types'

interface Props extends ITodo {
  onRemove: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({ completed, title, id, onRemove }) => {
  return (
    <div className='view'>
      <input
        name="toggle"
        className="toggle"
        type="checkbox"
        checked={completed}
      />
      <label htmlFor="toggle">{ title }</label>
      <button className='destroy' onClick={() => onRemove({ id }) } />
    </div>
  )
}
