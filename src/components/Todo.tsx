import { type Todo as ITodo } from '../types'

type Props = ITodo

export const Todo: React.FC<Props> = ({ completed, id, title }) => {
  return (
    <div className='view'>
      <input
        name="toggle"
        className="toggle"
        type="checkbox"
        checked={completed}
      />
      <label htmlFor="toggle">{ title }</label>
      <button className='destroy' onClick={() => {}} />
    </div>
  )
}
