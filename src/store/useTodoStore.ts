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
  markTodoAsCompleted: (id: string) => void
  markTodoAsPending: (id: string) => void
  deleteTodo: (id: string) => void
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
  markTodoAsCompleted: (id: string) =>
    set((state) => {
      const todos = plainToInstance(TodosRepository, { todos: state.todos })
      const todo = todos.findById(id)

      if (!todo) return {}

      todo.completed = true
      const updatedTodos = instanceToPlain(todos)

      return updatedTodos
    }),
  markTodoAsPending: (id: string) =>
    set((state) => {
      const todos = plainToInstance(TodosRepository, { todos: state.todos })
      const todo = todos.findById(id)

      if (!todo) return {}

      todo.completed = false
      const updatedTodos = instanceToPlain(todos)

      return updatedTodos
    }),
  deleteTodo: (id: string) =>
    set((state) => {
      const todos = plainToInstance(TodosRepository, { todos: state.todos })
      todos.deleteTodo(id)
      const updatedTodos = instanceToPlain(todos)

      return updatedTodos
    }),
}))
