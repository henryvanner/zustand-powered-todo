import { Todo } from './Todo'

export class TodosRepository {
  todos: Todo[]

  addTodo(todo: Todo) {
    this.todos = [...this.todos, todo]
  }

  findById(id: string) {
    return this.todos.find((todo) => todo.id === id)
  }

  findByIdAndDelete(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  findByIdAndUpdate(id: string, data: Partial<Todo>) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) return { ...todo, ...data }
      return todo
    })
  }

  get completedTodos() {
    return this.todos.filter((todo) => todo.completed)
  }

  get pendingTodos() {
    return this.todos.filter((todo) => !todo.completed)
  }
}
