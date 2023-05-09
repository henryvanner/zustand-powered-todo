import { Todo } from './Todo'

export class TodosRepository {
  todos: Todo[]

  addTodo(todo: Todo) {
    this.todos = [...this.todos, todo]
  }

  findById(id: string) {
    return this.todos.find((todo) => todo.id === id)
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }
}
