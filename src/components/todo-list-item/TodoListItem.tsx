import { memo } from 'react'
import styles from './TodoListItem.module.css'

type TodoListItemProps = {
  id: string
  testId?: string
  description: string
  isCompleted?: boolean
  markTodoAsCompleted?: (id: string) => void
  markTodoAsPending?: (id: string) => void
  deleteTodo?: (id: string) => void
}

export const TodoListItem: React.FC<TodoListItemProps> = memo(
  function TodoListItem({
    id,
    testId,
    description,
    isCompleted,
    markTodoAsCompleted,
    markTodoAsPending,
    deleteTodo,
  }) {
    const listItemId = `todoListItem${id}`
    const deleteButtonLabel = `Remove ${description} todo`
    const todoDescriptionClassName = isCompleted
      ? styles['description--completed']
      : styles.description

    const handleCheckboxCompletnessChange = () => {
      if (isCompleted && markTodoAsPending) {
        markTodoAsPending(id)
        return
      }

      if (!isCompleted && markTodoAsCompleted) {
        markTodoAsCompleted(id)
        return
      }
    }

    const handleDeleteButtonClick = () => {
      if (deleteTodo) {
        deleteTodo(id)
      }
    }

    return (
      <li
        data-testid={testId}
        className={styles.listItem}
      >
        <input
          id={listItemId}
          className={styles.completenessCheckbox}
          type='checkbox'
          defaultChecked={isCompleted}
          onChange={handleCheckboxCompletnessChange}
        />
        <label
          className={todoDescriptionClassName}
          htmlFor={listItemId}
        >
          {description}
        </label>
        <button
          className={styles.deleteButton}
          type='button'
          aria-label={deleteButtonLabel}
          onClick={handleDeleteButtonClick}
        >
          🗑
        </button>
      </li>
    )
  },
)
