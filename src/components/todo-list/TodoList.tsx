import { TodoListItem } from '../todo-list-item'
import styles from './TodoList.module.css'

type TodoListProps = {
  itemsTestId?: string
  todos?: {
    id: string
    description: string
    completed: boolean
  }[]
  markTodoAsCompleted?: (id: string) => void
  markTodoAsPending?: (id: string) => void
  deleteTodo?: (id: string) => void
}

export const TodoList: React.FC<TodoListProps> = ({
  itemsTestId,
  todos = [],
  markTodoAsCompleted,
  markTodoAsPending,
  deleteTodo,
}) => {
  return (
    <div>
      <h2 className={styles.heading}>Todos</h2>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            id={todo.id}
            testId={itemsTestId}
            description={todo.description}
            isCompleted={todo.completed}
            markAsCompleted={
              markTodoAsCompleted
                ? () => markTodoAsCompleted(todo.id)
                : undefined
            }
            markAsPending={
              markTodoAsPending ? () => markTodoAsPending(todo.id) : undefined
            }
            deleteTodo={deleteTodo ? () => deleteTodo(todo.id) : undefined}
          />
        ))}
      </ul>
    </div>
  )
}
