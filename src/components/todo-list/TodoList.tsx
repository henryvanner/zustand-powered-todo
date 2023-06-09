import {
  useDeleteTodo,
  useMarkTodoAsCompleted,
  useMarkTodoAsPending,
  useTodos,
  useVisibilityFilter,
} from '../../hooks'
import { TodoListItem } from '../todo-list-item'
import styles from './TodoList.module.css'

type TodoListProps = {
  itemsTestId?: string
}

export const TodoList: React.FC<TodoListProps> = ({ itemsTestId }) => {
  const visibilityFilter = useVisibilityFilter()
  const todos = useTodos({ visibilityFilter })
  const markTodoAsCompleted = useMarkTodoAsCompleted()
  const markTodoAsPending = useMarkTodoAsPending()
  const deleteTodo = useDeleteTodo()

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
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  )
}
