import { AddTodoForm } from './components/add-todo-form'
import { VisibilityFilters } from './components/visibility-filters'
import { TodoList } from './components/todo-list'

export const App = () => {
  return (
    <>
      <AddTodoForm />
      <VisibilityFilters />
      <TodoList />
    </>
  )
}
