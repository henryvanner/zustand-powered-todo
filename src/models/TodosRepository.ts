import { Todo } from './Todo'

export class TodosRepository {
  todos: Todo[]

  addTodo(todo: Todo) {
    this.todos = [...this.todos, todo]
  }

  findById(id: string) {
    return this.todos.find((todo) => todo.id === id)
  }
}
