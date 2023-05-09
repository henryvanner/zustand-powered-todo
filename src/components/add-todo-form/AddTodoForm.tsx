import { useState } from 'react'
import styles from './AddTodoForm.module.css'

type AddTodoFormProps = {
  addTodo?: (description: string) => void
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [textInput, setTextInput] = useState('')

  const handleTextInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setTextInput(event.target.value)
  }

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    if (addTodo) {
      addTodo(textInput)
      setTextInput('')
    }
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
