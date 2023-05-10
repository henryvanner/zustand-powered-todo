import { useRef } from 'react'
import { useAddTodo } from '../../hooks'
import styles from './AddTodoForm.module.css'

export const AddTodoForm: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null)
  const addTodo = useAddTodo()

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    if (!textInputRef.current) return

    addTodo(textInputRef.current.value)
    textInputRef.current.value = ''
    textInputRef.current?.focus()
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleFormSubmit}
    >
      <label
        className={styles.input__label}
        htmlFor='newTodoInput'
      >
        New Todo
      </label>
      <input
        id='newTodoInput'
        ref={textInputRef}
        className={styles.input}
        type='text'
        required
        autoFocus
      />
      <button
        className={styles.button}
        type='submit'
      >
        Add
      </button>
    </form>
  )
}
