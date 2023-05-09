import {
  useMarkTodoAsCompleted,
  useMarkTodoAsPending,
  useTodos,
} from '../../hooks'
import { TodoListItem } from '../todo-list-item'
import styles from './TodoList.module.css'

type TodoListProps = {
  itemsTestId?: string
  deleteTodo?: (id: string) => void
}

export const TodoList: React.FC<TodoListProps> = ({
  itemsTestId,
  deleteTodo,
}) => {
  const todos = useTodos()
  const markTodoAsCompleted = useMarkTodoAsCompleted()
  const markTodoAsPending = useMarkTodoAsPending()

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
            markTodoAsCompleted={markTodoAsCompleted}
            markTodoAsPending={markTodoAsPending}
            deleteTodo={deleteTodo ? () => deleteTodo(todo.id) : undefined}
          />
        ))}
      </ul>
    </div>
  )
}
