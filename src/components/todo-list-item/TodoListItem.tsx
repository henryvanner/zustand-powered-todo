import styles from './TodoListItem.module.css'

type TodoListItemProps = {
  id: string
  testId?: string
  description: string
  isCompleted?: boolean
  markAsCompleted?: () => void
  markAsPending?: () => void
  // this prop could have been named just `delete` but it's a reserved keyword
  deleteTodo?: () => void
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  id,
  testId,
  description,
  isCompleted,
  markAsCompleted,
  markAsPending,
  deleteTodo,
}) => {
  const listItemId = `todoListItem${id}`
  const deleteButtonLabel = `Remove ${description} todo`
  const todoDescriptionClassName = isCompleted
    ? styles['description--completed']
    : styles.description

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
        onChange={isCompleted ? markAsPending : markAsCompleted}
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
        onClick={deleteTodo}
      >
        🗑
      </button>
    </li>
  )
}
