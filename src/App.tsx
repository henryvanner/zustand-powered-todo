import { TodoList } from './components/todo-list'

export const App = () => {
  return (
    <TodoList
      todos={[
        { id: '1', description: 'make a cup of coffee', completed: true },
        { id: '2', description: 'run 5 kilometers', completed: false },
      ]}
    />
  )
}