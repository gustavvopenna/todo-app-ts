import { type Todo as ITodo, type TodoId } from '../types'

interface Props extends ITodo {
  onRemove: ({ id }: TodoId) => void
  onToggle: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({ completed, title, id, onToggle, onRemove }) => {
  return (
    <div className='view'>
      <input
        name="toggle"
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={() => onToggle({ id }) }
      />
      <label htmlFor="toggle">{ title }</label>
      <button className='destroy' onClick={() => onRemove({ id }) } />
    </div>
  )
}
