import { useState } from 'react'
import { useAddTodo } from '../../hooks'
import styles from './AddTodoForm.module.css'

export const AddTodoForm: React.FC = () => {
  const [textInput, setTextInput] = useState('')
  const addTodo = useAddTodo()

  const handleTextInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setTextInput(event.target.value)
  }

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    addTodo(textInput)
    setTextInput('')
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
        className={styles.input}
        type='text'
        required
        autoFocus
        value={textInput}
        onChange={handleTextInputChange}
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
