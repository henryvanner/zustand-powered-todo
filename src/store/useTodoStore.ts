import { v4 } from 'uuid'
import { instanceToPlain, plainToInstance } from 'class-transformer'
import { create } from 'zustand'
import { TodosRepository } from '../models/TodosRepository'
import { Todo } from '../models/Todo'

type TodoState = {
  todos: {
    id: string
    description: string
    completed: boolean
  }[]
  addTodo: (description: string) => void
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (description: string) =>
    set((state) => {
      const todos = plainToInstance(TodosRepository, { todos: state.todos })
      const todo = plainToInstance(Todo, {
        id: v4(),
        description,
        completed: false,
      })
      todos.addTodo(todo)
      const updatedTodos = instanceToPlain(todos)
      return updatedTodos
    }),
}))
